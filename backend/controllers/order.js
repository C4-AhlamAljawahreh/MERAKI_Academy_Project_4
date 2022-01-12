const orderModel = require ('../database/models/orderSchema')



const createOrder = (req,res)=>{
const {products,totalPrice,userId}=req.body;
// let totalPrice =0;
const newOrder = new orderModel({products,totalPrice,userId})
newOrder.save().then((order)=>{
    res.json({success:"true",message:'successfully created Order',order:order})
}).catch((err)=>{
res.json({success:"false",message:'failed to create Order'})})
}

const getAllOrders = (req,res)=>{
    orderModel.find({}).then((result)=>{
        res.status(200)
        res.json({success:'true',message:'all orders:' ,orders: result})
    }).catch((err)=>{
        res.status(500)
        res.json({success:'false',message:'failed to get all orders' })
    })
}
const deleteOrderById = (req,res)=>{
    const theId = req.params.id
    orderModel.findByIdAndDelete({_id: theId}).then((result)=>{
        res.json({success:"true",message:`successfully delete order with id : ${theId}`,deletedOrder:result})
    })
    .catch((err)=>{
        res.json({success:"false",message:`failed to delete order with id : ${theId}`})
    })
}
module.exports={createOrder , getAllOrders,deleteOrderById}