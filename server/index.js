//set read to environment variables
require('dotenv').config();
//require modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
const contactsRoutes = require('./routes/userRoutes');

//invoke express function
const app = express();

//setm middlewares
app.use(cors());                     //this helps to connect forntend and backend server
app.use(bodyParser.json());          //this helps to turn json objects of our data 

//create a port
const port = process.env.PORT;

//connecting database
mongoose.connect(process.env.MONGO_URL)
    .then( () => {
        console.log('Database connection succesfully');
    })
    .catch( (error) => {
        console.log(error);
    });

app.use('/api/contacts/', contactsRoutes);
 
//create server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});


