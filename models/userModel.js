const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add The Username"]
    },
    email: {
        type: String,
        required: [true, "Please add The User email"],
        unique: [true, "Email already exist"]
    },
    password: {
        type: String,
        required: [true, "Please add The User Password"],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)