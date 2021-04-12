const express = require('express')
const commentRouter = express.Router()
const { create } = require('../controllers/commentController')

commentRouter.post('/', create)
module.exports = commentRouter