const authService = require("../services/authService")

const Register = async (req, res) => {
    try {
        const user = await authService.createUser(req.body)
        

        res.status(200).send({
            message: "User register successfully",
            data: user
        })

    }
    catch (e) {
        res.status(500).send("Internal server error")
    }
}

module.exports = {
    Register
}