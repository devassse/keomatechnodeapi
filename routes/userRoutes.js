const express = require("express")
const router = express.Router()
const {registerUser} = require("../controllers/userController")

router.post("/register", registerUser)

router.post("/login", (req, res) => {
    res.json({message: "Login User"})
})

router.get("/current", (req, res) => {
    res.json({message: "Current User Info"})
})

module.exports = router