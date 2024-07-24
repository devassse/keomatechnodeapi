const asyncHander = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get All Contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHander(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@desc Get Single Contact
//@route GET /api/contacts/:id
//@access public
const getSingleContact = asyncHander(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    console.log("Single Contact", contact);
    if(!contact){
        res.status(404)
        throw new Error("Contact not Found!")
    }
    res.status(200).json(contact)
})

//@desc Create New Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHander(async (req, res) => {
    console.log("Create User data: ",req.body);
    const {name, surname, phone, email} = req.body
    if(!name || !surname || !phone || !email) {
        res.status(400)
        throw new Error('ERROR.ALL_FIELDS_ARE_MANDATORY')
    }

    const contact = await Contact.create({
        name, surname, phone, email
    })

    res.status(201).json(contact)
})

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHander(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not Found!")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    res.status(200).json(updatedContact)
})

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHander(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not Found!")
    }

    await Contact.remove()

    res.status(200).json(contact)
})

module.exports = {getAllContacts, getSingleContact, createContact, updateContact, deleteContact}