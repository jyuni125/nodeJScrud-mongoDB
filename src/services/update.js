const accounts = require('../models/accounts')



module.exports = async (_id, obj) =>{
 try{
    await accounts.updateOne({_id},
        {
            $set:obj
            
        })

    return true;
 }catch(error){
    return false
 }   
}