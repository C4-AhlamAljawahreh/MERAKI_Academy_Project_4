const productModel= require ('../database/models/productSchema')

const createNewProduct = (req,res)=>{
const  {name,price,image} = req.body;
const newProduct = new productModel ({name,price,image})
newProduct.save()
.then((result)=>{
    res.status(201);
    res.json({success:"true",result:result})
}).catch((err)=>{
    res.json({success:"false",result:'failed to add product'});
})
}

module.exports={
    createNewProduct
}