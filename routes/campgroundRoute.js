const express = require('express')
const campgroundRouter = express.Router()
const { getAll } = require('../controllers/campgroundController')

campgroundRouter.get('/', getAll)
module.exports = campgroundRouter