const accounts = require('../models/accounts')



module.exports = async (_id) =>{
 try{
    await accounts.deleteOne({
        _id
    });
    return true;
 }catch(error){
    return false
 }   
}