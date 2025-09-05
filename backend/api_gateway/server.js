// Entry point for the API Gateway server
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/auth': '/', // This will remove the /auth prefix
    },
}));

// ...other routes...

app.get("/", (req, res) => {
    res.send("API Gateway is running");
});

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));