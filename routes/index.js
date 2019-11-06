const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(_, res) {
    res.redirect('/product')
});

module.exports = router;