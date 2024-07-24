const asyncHander = require("express-async-handler")
const User = require("../models/userModel")

//@desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHander(async (req, res) => {
    res.json({message: "Register User"})
})

module.exports = {
    registerUser
}