const mongoose = require('mongoose');

const contactModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscription: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Contact', contactModel); 



