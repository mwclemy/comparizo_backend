const models = require('../models')
const commentController = {}

commentController.create = async (req, res) => {
    try {
        const { text, userId, campgroundId, submittedBy } = req.body
        const comment = await models.comment.create(
            {
                text: text,
                userId: userId,
                campgroundId: campgroundId,
                submittedBy: submittedBy
            }

        )

        res.json({
            comment
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }

}


module.exports = commentController