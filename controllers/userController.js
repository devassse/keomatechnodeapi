const asyncHander = require("express-async-handler")
const User = require("../models/userModel")

//@desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHander(async (req, res) => {
    res.json({message: "Register User"})
})

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHander(async (req, res) => {
    res.json({message: "Login User"})
})

//@desc Login User
//@route POST /api/users/login
//@access private
const currentUser = asyncHander(async (req, res) => {
    res.json({message: "Current User Info"})
})

module.exports = {
    registerUser, loginUser, currentUser
}