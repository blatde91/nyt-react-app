const router = require("express").Router();
const axios = require("axios");
const request = require("request");

router.get("/:query", function(req, res) {
    console.log('nyt route', req.params.query)

    request.get({
        url: 
    })
})