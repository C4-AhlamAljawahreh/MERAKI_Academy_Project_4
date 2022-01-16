const categoryModel = require("../database/models/categorySchema");

//create new category
const createNewCategory = (req, res) => {
  const { name } = req.body;
  const newCategory = new categoryModel({ name });
  newCategory
    .save()
    .then((result) => {
      res.status(201);
      res.json({ success: true, message: "successfully created cetagory" });
    })
    .catch((err) => {
      res.status(500);
      res.json({ success: false, message: "failed to create category" });
    });
};
const getAllCategory=(req,res)=>{
  categoryModel.find({}).then((result)=>{
    res.status(200).json({success: true, message:"all categoris", result:result})
  }).catch((err)=>{
    res.status(500);
    res.json({ success: false, message: "failed get categories" });
  })
}

module.exports = { createNewCategory ,getAllCategory };
