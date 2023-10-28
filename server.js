const express = require("express")
const app = express()
const { PORT } = require("./config/index")
const db = require("./db/index")
const cors = require('cors')

app.use(cors)

app.listen(PORT, () => {
    console.log(`listen port ${PORT}`)
})