const models = require('../models')
const campgroundController = {}


campgroundController.getAll = async (req, res) => {
    try {
        const campgrounds = await models.campground.findAll()
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


module.exports = campgroundController