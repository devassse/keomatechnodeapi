const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add Contact Name"]
    },
    surname: {
        type: String,
        required: [true, "Please add Contact Surname"]
    },
    phone: {
        type: String,
        required: [true, "Please add Phone Number"]
    },
    email: {
        type: String,
        required: [true, "Please add Email Address"]
    },
},
{
    timestemps: true
}
)

module.exports = mongoose.model("Contact", contactSchema)