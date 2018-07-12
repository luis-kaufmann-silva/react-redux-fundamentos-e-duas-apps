const express = require('express');
const BillingCycle = require('../api/cycleService');
const AuthService = require('../api/authService');

const authMiddleware = require('./auth');

module.exports = function (server){
    // url base
    const authenticatedRouter = express.Router();
    authenticatedRouter.use(authMiddleware);
    server.use('/api', authenticatedRouter);

    BillingCycle.register(authenticatedRouter, '/billing-cycle');

    const router = express.Router();
    server.use('/oapi', router);
    router.post('/login', AuthService.login);
    router.post('/signup', AuthService.signup);
    router.post('/validate-token', AuthService.validateToken);

};