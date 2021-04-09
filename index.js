const express = require('express')
const app = express()
const routesReport = require('rowdy-logger').begin(app)
const userRouter = require('./routes/userRoute')
const campgroundRouter = require('./routes/campgroundRoute')
app.use(express.json())
app.use(require('cors')())
app.use('/users', userRouter)
app.use('/campgrounds', campgroundRouter)
const port = process.env.PORT || 3001
app.listen(port, () => {
    routesReport.print()
})