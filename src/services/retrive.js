const accounts = require('../models/accounts')



module.exports = async () =>{
 try{
    const result = await accounts.find();

    return result; 
 }catch(error){
    return []
 }   
}