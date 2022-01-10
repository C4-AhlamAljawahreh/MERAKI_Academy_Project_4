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

const updateProductById = (req,res)=>{
const theId = req.params.id;
const  {name,price,image} = req.body;
productModel.findByIdAndUpdate({_id: theId},{name,price,image}).then((result)=>{
    res.json({success:"true",message:'the product updated',oldProduct:result})
})
.catch((err)=>{
    res.json({success:"false",result:'failed to update product'})
})
}

module.exports={
    createNewProduct,
    updateProductById
}