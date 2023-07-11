//import modules
const { default: mongoose } = require('mongoose');
const express = require('mongoose');

//import contact database
const Contact = require('../models/User');

/////////////////////////////////////////////////////////
//get all routes
const getAllContacts = async(req, res) => {
    
    //find all users
    const contacts = await Contact.find({}).sort({createdAt: -1});

    //if there are no contacts
    if(!contacts){
        //set status as 400 and send json message
        return res.status(400).json({error: "No contacts found"});
    }
    
    //send contacts as a json format
    res.status(200).send(contacts);
}

/////////////////////////////////////////////////////////
//get a single contact
const getAContact = async (req, res) => {
    
    //find the user click contact id from route parameters
    const { id } = req.params;

    //check are there any id in mongoose database
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No id found related to that id"});
    }
    
    //find related contact
    const contact = await Contact.findById(id);
    
    //if there are no contact
    if(!contact){
        //set status as 400 and send json message
        return res.status(400).json({error: "No contact found"});
    }

    //send contact as a json format
    res.status(200).json(contact);
}

//////////////////////////////////////////////////////////
//post a contact
const createAContact = async (req, res) => {

    //get data from request body
    const { name, subscription, image } = req.body;

    //add contact to the database
    try{
        //create a object, put values and store as a contact variable
        const contact = Contact.create({ name, subscription, image });

        //send contact as a json format
        res.status(200).json(contact);
    }catch(error){
        //set status as 400 and send json message
        res.status(400).json( {error: error.message} );
    }
}


////////////////////////////////////////////////////////////
//delete a contact
const deleteAContact = async (req, res) => {

    //find the user click contact id from route parameters
    const { id } = req.params;

    //check are there any id in mongoose database
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No id found related to that id"});
    }

    //delete related contact
    const contact = await Contact.findOneAndDelete({_id: id});

    //if there are no contact
    if(!contact){
        //set status as 400 and send json message
        return res.status(400).json({error: "No contact found"});
    }

    res.status(200).json(contact);

}

////////////////////////////////////////////////////////////
//update a contact
const updateAContact = async (req, res) => {

    //find the user click contact id from route parameters
    const { id } = req.params;

    //check are there any id in mongoose database
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No id found related to that id"});
    }

    //delete related contact (should pass id and should update object)
    const contact = await Contact.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    //if there are no contact
    if(!contact){
        //set status as 400 and send json message
        return res.status(400).json({error: "No contact found"});
    }

    res.status(200).json(contact);
}

//there are more than one things to export. So we needed to export as a obejct
module.exports = {
    getAllContacts,
    getAContact,
    createAContact,
    deleteAContact,
    updateAContact
}


