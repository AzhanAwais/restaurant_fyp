const express = require("express")
const app = express()
const { PORT } = require("./config/index")
const db = require("./db/index")
const cors = require('cors')
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
const errorMiddleware = require("./middlewares/errorMiddleware")
const restaurantRoute = require("./routes/restaurantRoute")
const cuisineRoute = require("./routes/cuisineRoute")
const ambienceRoute = require("./routes/ambienceRoute")
const reviewRoute = require("./routes/reviewRoute")
const blogRoute = require("./routes/blogRoute")
const commentRoute = require("./routes/commentRoute")
const mediaRoute = require("./routes/mediaRoute")
const dashboardRoute = require("./routes/dashboardRoute")
const userImages = require("./routes/userImagesRoute")
const postGigRoute = require("./routes/postGigRoute")
const notificationRoute = require("./routes/notificationRoute")
const uploadFileRoute = require("./routes/uploadFileRoute")
const path = require('path')

// use middlewares
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('uploads'))
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// use routes
app.use(authRoute)
app.use(userRoute)
app.use(restaurantRoute)
app.use(cuisineRoute)
app.use(ambienceRoute)
app.use(reviewRoute)
app.use(blogRoute)
app.use(commentRoute)
app.use(mediaRoute)
app.use(dashboardRoute)
app.use(userImages)
app.use(postGigRoute)
app.use(notificationRoute)
app.use(uploadFileRoute)

// error middleware (Note: Always keep it at bottom)
app.use(errorMiddleware)


app.listen(PORT, () => {
    console.log(`listen port ${PORT}`)
})