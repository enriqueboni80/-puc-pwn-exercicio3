const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    pid: {
        type: Number
    },
    author: {
        type: String
    },
    comment: {
        type: String
    },
    date_comment: {
        type: Date
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment