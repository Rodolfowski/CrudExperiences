var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Type.ObjectId;

var saleItems = new Schema({
	products:[{type:ObjectId,ref:'Product'}],
	relatedItem:[type:ObjectId, ref:'Product'}]
})

module.exports = mongoose.model('SaleItems',saleItems;
