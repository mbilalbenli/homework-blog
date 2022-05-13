const express = require('express')
const router = express.Router()

router.get('/articles', (req, res) => {
    res.send("ın articles")
})

module.exports = router