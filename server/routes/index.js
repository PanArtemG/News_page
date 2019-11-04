const express = require ('express');
const router = express.Router();
const Post = require ('../models/news_posts');

// создаем гет запрос, при перходе на главную страницу, мы обращаемся обращаемс с ключом news-blog/posts и срабатывает запрос
// по которому мы получаем с базы все наши посты в post которые будут потом рендерится на главную
router.get ('news-blog/posts', async (req, res) => {
    const posts = await Post.find({});
    await res.json(posts)
});
