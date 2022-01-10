const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
name :{type:String,required:true,unique:true},
price :{type:Number,required:true},
image :{type:String,required},
userId:{type:mongoose.Schema.Types.ObjectId , ref:"User"}
})

module.exports = mongoose.model('Product',productSchema)