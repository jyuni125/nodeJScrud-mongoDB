const express = require('express');
const router = express.Router();

//import services
const createServices = require('../services/create');
const retriveServices = require('../services/retrive');
const updateServices = require('../services/update');
const deleteServices = require('../services/delete');

router.post('/create', async (req , res)=>{
//destructure
const {firstname,lastname,age,gender} = req.body;

//use services
const result = await createServices(firstname,lastname,age,gender);

if(result){
    res
        .status(200)
        .send({
            status: result,
            message: 'Created Successfully'
        })
}else{
    res
        .status(500)
        .send({
            status: result,
            message: 'Created Unsuccessfully'
        })
}

})

router.post('/retrive', async (req , res)=>{
    const result = await retriveServices();

    if(result){
        res
            .status(200)
            .send(result)
    }else{
        res
            .status(500)
            .send({
                status: result,
                message: 'Retrive Unsuccessfully'
            })
    }
 
})

router.post('/update', async (req , res)=>{
 const { _id, obj } = req.body;

 const result = await updateServices(_id,obj);

 if(result){
    res
        .status(200)
        .send({
            status: result,
            message: 'Updated Successfully'
        })
}else{
    res
        .status(500)
        .send({
            status: result,
            message: 'Updated Unsuccessfully'
        })
}

})

router.post('/delete', async (req , res)=>{
    const { _id } = req.body;

    const result = await deleteServices(_id);
   
    if(result){
       res
           .status(200)
           .send({
               status: result,
               message: 'Delete Successfully'
           })
   }else{
       res
           .status(500)
           .send({
               status: result,
               message: 'Delete Unsuccessfully'
           })
   }
})



module.exports = router;