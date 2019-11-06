const express = require('express');
const router = express.Router();
const Products = require('../store/Products');

/* GET home page. */
router.get('/', function(_, res) {
    Products.get()
        .then(function(products) {
            res.render('index', { products });
        })
});

router.get('/:id', function(req, res) {
    Products.getByID(req.params.id)
        .then(function(product) {
            res.render('product', { product: product[0] });
        })
});

module.exports = router;