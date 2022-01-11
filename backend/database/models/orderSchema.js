const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
products:{type:[mongoose.Schema.Types.ObjectId],ref:'Product'},
totalPrice:{type:[Number]},
userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

module.exports = mongoose.model('Order',orderSchema)
