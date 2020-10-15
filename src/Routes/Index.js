const express = require('express')
let router = express.Router()
var cWellcome = require("../Controller/Index");
router
    .route("/home/:id")
    .get(cWellcome.getUsersWhere)
module.exports = router;