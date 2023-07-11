//import modules
const express = require('express');

//import user controllers
const contactControllers = require('../controllers/user');

//create a router
const router = express.Router();

//creating routes
//get contacts
router.get('/', contactControllers.getAllContacts);

//get unique contact
router.get('/:id', contactControllers.getAContact);

//post request
router.post('/', contactControllers.createAContact);

//delete request
router.delete('/:id', contactControllers.deleteAContact);

//update request
router.patch('/:id', contactControllers.updateAContact);

module.exports = router;



