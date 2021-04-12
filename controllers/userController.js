const models = require('../models')
const userController = {}

userController.create = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await models.user.create({
            name: name,
            email: email,
            password: password
        })

        res.json({
            message: 'ok',
            user
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: 'user creation failed.'
        })
    }

}

userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne(
            {
                where: {
                    email: req.body.email
                }
            })

        if (user.password === req.body.password) {
            res.json({
                message: 'login success',
                user
            })
        }
        else {
            res.status(401)
            res.json({
                message: 'login failed.'
            })
        }
    } catch (error) {
        res.status(400)
        res.json({
            message: 'login failed.'
        })
    }

}

userController.getAll = async (req, res) => {
    try {
        const users = await models.user.findAll()

        res.json({
            users
        })

    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}

userController.findOne = async (req, res) => {
    try {
        const user = await models.user.findOne(
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.json({
            user
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}


userController.update = async (req, res) => {
    try {
        const oldUser = await models.user.findOne(
            {
                where: {
                    id: req.params.id
                }
            }
        )
        const user = await oldUser.update(req.body)

        res.json({
            message: 'ok',
            user
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}


userController.destroy = async (req, res) => {
    try {
        const response = await models.user.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.json(response)
    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}

userController.allCampgrounds = async (req, res) => {
    try {
        const user = await models.user.findOne(
            {
                where: {
                    id: req.params.id
                }
            }
        )

        const campgrounds = await user.getCampgrounds()
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

userController.getCampground = async (req, res) => {
    try {
        const userId = req.params.id
        const campgroundId = req.params.campgroundId

        const campground = await models.campground.findOne(
            {
                where: {
                    id: campgroundId,
                    userId: userId
                }
            }
        )

        res.json({
            campground
        })

    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}

userController.createCampground = async (req, res) => {
    try {
        const { name, price, imageUrl, description } = req.body
        const user = await models.user.findOne(
            {
                where: {
                    id: req.params.id
                }
            }
        )

        const campground = await models.campground.create({
            name: name,
            price: price,
            imageUrl: imageUrl,
            description: description
        })

        user.addCampground(campground)

        res.json({
            message: 'ok',
            user,
            campground
        })

    } catch (error) {
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}

userController.updateCampground = async (req, res) => {
    try {
        const userId = req.params.id
        const campgroundId = req.params.campgroundId
        console.log(userId, campgroundId);
        await models.campground.update(
            req.body,
            {
                where: {
                    id: campgroundId,
                    userId: userId
                }
            })

        const campground = await models.campground.findOne({
            where: {
                id: campgroundId
            }
        })
        res.json({
            campground
        })
    } catch (error) {
        console.log(error);
        res.status(400)
        res.json({
            message: 'something went wrong.'
        })
    }
}
module.exports = userController