const mongoose = require ('mongoose');

const mongodb = 'mongodb+srv://news_admin:news_admin@blog-yqlgn.mongodb.net/test?retryWrites=true&w=majority';

async function connectDb() {
    try {
        await mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected");
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = connectDb;