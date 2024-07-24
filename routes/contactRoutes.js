const express = require("express")
const router = express.Router()
const {getAllContacts, getSingleContact, createContact, updateContact, deleteContact} = require("../controllers/contactController")

router.route('/').get(getAllContacts)
router.route('/').post(createContact)
router.route('/:id').get(getSingleContact)
router.route('/:id').put(updateContact)
router.route('/:id').delete(deleteContact)

module.exports = router