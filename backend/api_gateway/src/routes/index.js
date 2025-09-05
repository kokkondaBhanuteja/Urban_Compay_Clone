const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();

const authServiceProxy = createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/auth': '/',
    },
});

const userServiceProxy = createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/users': '/',
    },
});

const bookingServiceProxy = createProxyMiddleware({
    target: process.env.BOOKING_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/bookings': '/',
    },
});

const paymentServiceProxy = createProxyMiddleware({
    target: process.env.PAYMENT_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/payments': '/',
    },
});

router.use('/auth', authServiceProxy);
router.use('/users', userServiceProxy);
router.use('/bookings', bookingServiceProxy);
router.use('/payments', paymentServiceProxy);

module.exports = router;