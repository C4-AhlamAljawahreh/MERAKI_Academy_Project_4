const orderModel = require ('../database/models/orderSchema')
const productModel = require ('../database/models/productSchema')



const createOrder = async (req,res)=>{
const {products,userId}=req.body;
// let totalPrice =0;
const total= await products.map((element,index)=>{
    productModel.findOne({_id: element}).then((result)=>{
    console.log(result.price);
    return result.price
    })
})
console.log(total)
// console.log(totalPrice)
const newOrder = new orderModel({products,userId})
newOrder.save().then((order)=>{
    res.json({order:order})
}).catch((err)=>{
res.json('error')})
}

module.exports={createOrder}