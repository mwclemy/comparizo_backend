const models = require('../models')
const campgroundRouter = require('../routes/campgroundRoute')
const campgroundController = {}


campgroundController.getAll = async (req, res) => {
    try {
        const campgrounds = await models.campground.findAll({ include: models.user })
        res.json({
            campgrounds
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }


}

campgroundController.getComments = async (req, res) => {
    try {
        const campgroundId = req.params.id
        const campground = await models.campground.findOne({
            where: {
                id: campgroundId
            }
        })
        const comments = await campground.getComments({ include: models.user })
        res.json({
            comments
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}


module.exports = campgroundController