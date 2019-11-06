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

router.get('/:pid', function(req, res) {
    Products.getByID(req.params.pid)
        .then(product => this.produtos = product[0])
    Products.getProductComments(req.params.pid).then(comentarios => this.comentarios = comentarios)
    res.render('products', {
        product: this.produtos,
        comments: this.comentarios
    })
});

router.post('/', function(req, res) {
    Products.saveComment(req)
        .then(res.redirect(`/`))
});

module.exports = router;