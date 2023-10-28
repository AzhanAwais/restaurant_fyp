const express = require("express")
const app = express()
const { PORT } = require("./config/index")
const db = require("./db/index")
const cors = require('cors')

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(PORT, () => {
    console.log(`listen port ${PORT}`)
})