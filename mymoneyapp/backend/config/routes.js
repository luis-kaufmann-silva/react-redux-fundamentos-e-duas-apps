const express = require('express');
const BillingCycle = require('../api/cycleService');
module.exports = function (server){
    // url base
    const router = express.Router();
    server.use('/api', router);

    BillingCycle.register(router, '/billing-cycle');
};