const accounts = require('../models/accounts')



module.exports = async (firstname,lastname,age,gender) =>{
 try{
    await accounts.insertMany({
        firstname,
        lastname,
        age,
        gender
    });
    return true;
 }catch(error){
    return false
 }   
}