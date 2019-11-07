const mongoose = require ('mongoose');
const Shema = mongoose.Schema;

const Post = new Shema ({
    title: String,
    image: String,
    description: String,
    data: Date,
    author: String,
    category: String
});

module.exports = mongoose.model( 'post', Post, 'news');

