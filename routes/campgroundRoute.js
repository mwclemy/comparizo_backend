const express = require('express')
const campgroundRouter = express.Router()
const { getAll, getComments } = require('../controllers/campgroundController')

campgroundRouter.get('/', getAll)
campgroundRouter.get('/:id/comments', getComments)
module.exports = campgroundRouter