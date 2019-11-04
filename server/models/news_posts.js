const mongoose = require ('mongoose');
const Shema = mongoose.Schema;

const Post = new Shema ({
    title: String,
    description: String,
    data: Date
});

module.exports = mongoose.model( 'post', Post, 'posts');

