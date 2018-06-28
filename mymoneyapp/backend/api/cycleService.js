const BillingCycle = require('./cycle');

const errorHandler = require('./common');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});
BillingCycle
    .after('post', errorHandler)
    .after('put', errorHandler);

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((err, value) => {
        if (err){
            res.status(500).json({errors: [err]});
        } else {
            res.json({value})
        }
    });
});

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([
        { $project: { credit: { $sum: "$credits.value" }, debit: { $sum: "$debits.value" } } }, 
        { $group: {_id: null, credit: {$sum: '$credit'}, debit: {$sum: '$debit', }} }, 
        { $project: {_id: 0, credit: 1, debit: 1} }
    ]).exec((err, results) => {
        if (err){
            res.status(500).json({errors: [err]});
        } else {
            res.json(results[0] || {credit: 0, debit: 0})
        }
    });
});




module.exports = BillingCycle;