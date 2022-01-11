const categoryModel = require('../database/models/categorySchema')

const createNewCategory =(req,res)=>{
    const {name}=req.body;
    const newCategory= new categoryModel ({name})
    newCategory.save().then((result)=>{
        res.status(201)
        res.json({success:"true",message:'successfully created cetagory'})
    }).catch((err)=>{
        res.status(500)
        res.json({success:"false",message:'failed to create category'})
    })

}

module.exports={createNewCategory}