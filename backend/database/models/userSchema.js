const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
firstName:{type:String,required:true},
lastName:{type:String,required:true},
age:{type:Number},
email:{type:String,required:true,unique:true},
role: {type:mongoose.Schema.Types.ObjectId, ref:"Role"}
})

module.exports = mongoose.model('User',userSchema)