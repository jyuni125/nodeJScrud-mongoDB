const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//middlewere
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crud_db').catch(error => handleError(error));


//checker if working
// const MyModel = mongoose.model('accounts', new mongoose.Schema({ name: String }));
// MyModel.find(function(error, result) { 
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("result: "+result);
//     }
//  });


//ROUTES
const accountRoutes = require('./routes/accounts')
 //middlewere
app.use('/accounts',accountRoutes);

const port = 3112;


app.listen(port,()=>{
    console.log("Listening to port : ",port);
   
})