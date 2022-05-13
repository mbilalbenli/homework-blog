const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, 
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', async (req, res) => {
    const articles = [{
        title : "test article",
        createdAt : Date.now(),
        description : "this is a test article"
    }]
    res.render('articles/index', {articles: articles})
})

app.listen(5000)  