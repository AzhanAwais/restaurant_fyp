const express = require("express")
const app = express()
const { PORT } = require("./config/index")
const db = require("./db/index")
const cors = require('cors')
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")

// use middlewares
app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// use routes
app.use(authRoute)
app.use(userRoute)



app.listen(PORT, () => {
    console.log(`listen port ${PORT}`)
})