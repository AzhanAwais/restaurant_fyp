const mongoose = require('mongoose')
const { DB_URL } = require("../config/index")

mongoose.connect(DB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Db connected successfully")
}).catch((e) => {
    console.log("Problem with db connection")
})