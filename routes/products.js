const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comments = require('../store/Comment')

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
            res.render('products', { product: product[0] });
        })
});

router.get('/comments', function(req, res) {
    Comments.find().then(comments => res.render('products', { comments }))
});

router.post('/', function(req, res) {
    Comments.create({
        pid: req.body.pid,
        author: req.body.author,
        comment: req.body.comments
    }).then(() => res.send('Gravado com sucesso'))
});

module.exports = router;