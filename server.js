const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', async (req, res) => {
    const articles = [{
        title : "test article",
        createdAt : Date.now(),
        describtion : "this is a test article"
    }]
    res.render('index', {articles: articles})
})

app.listen(5000)  