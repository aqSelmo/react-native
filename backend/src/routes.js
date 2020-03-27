const express = require('express');

const Route = express.Router();

Route.get("/", (req, res) => {
    return res.json({
        "status" : "Página em construção"
    })
});

module.exports = Route;