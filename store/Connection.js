const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://teste:a123456@cluster1-ru3sa.mongodb.net/test?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}