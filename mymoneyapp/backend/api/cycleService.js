const BillingCycle = require('./cycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true,});

module.exports = BillingCycle;