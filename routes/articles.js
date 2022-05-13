const express = require('express')
const router = express.Router()


router.get("/new", (req, res) => {
    res.render("articles/new")
})

router.post('/', async (req, res, next) => {
    req.article = new Article()
    next()
  }, saveArticleAndRedirect('new'))

module.exports = router