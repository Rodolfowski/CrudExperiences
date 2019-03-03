 const mongoose = require('mongoose');
 const employedSchema = mongoose.Schema({
  nome:{type:String},
  cargo:{type:String}
});

module.exports = mongoose.model('employed',employedSchema);
 
