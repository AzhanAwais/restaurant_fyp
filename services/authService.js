const User = require("../models/User")

export const createUser = async (email) => {
    try {
        const user = await User.findOne({ email })
       
    }
    catch (e) {
        
    }
}