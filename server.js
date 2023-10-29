const express = require("express")
const app = express()
const { PORT } = require("./config/index")
const db = require("./db/index")
const cors = require('cors')
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
const authController = require("./controllers/authController")
const errorMiddleware = require("./middlewares/errorMiddleware")
const restaurantRoute = require("./routes/restaurantRoute")

// use middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// use routes
app.use(authRoute)
app.use(userRoute)

app.use(restaurantRoute)
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`listen port ${PORT}`)
})