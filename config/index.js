const dotenv = require('dotenv')
dotenv.config()

module.exports = { PORT, DB_URL, JWT_SECRET_KEY, ATLAS_DB_URL } = process.env