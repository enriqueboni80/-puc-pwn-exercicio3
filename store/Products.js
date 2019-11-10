const knex = require('knex')
const knexConfigs = require('../knexfile')
const db = knex(knexConfigs.development)
const Comments = require('./Comment')

const TABLE_NAME = 'products'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },
    getByID(id) {
        return db(TABLE_NAME).where('id', id)
    },
    insert(product) {
        return db(TABLE_NAME).insert(product);
    },
    delete(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .del();
    },
    update(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .update({
                name: product.name,
                description: product.description,
                price: product.price
            });
    },
    saveComment(req) {
        return Comments.create({
            pid: req.body.pid,
            author: req.body.author,
            comment: req.body.comments,
            date_comment: Date.now()
        })
    },
    getProductComments(pid) {
        return Comments.find({ 'pid': pid }).sort({ date_comment: -1 }).exec()
    }
}