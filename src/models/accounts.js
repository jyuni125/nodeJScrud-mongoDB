const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  gender: String
})




module.exports = mongoose.model('accounts', accountSchema);
