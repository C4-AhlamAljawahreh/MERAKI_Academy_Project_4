const userModel = require ('../database/models/userSchema')

const createNewUser = (req,res)=>{
    const {firstName,lastName,age,email,password}=req.body;
    const newUser = new userModel ( {firstName,lastName,age,email,password})
    newUser.save().then((result)=>{
        res.status(201)
        res.json({success:true, result:result})
    }).catch((err)=>{
        res.status(500);
        res.json(err);
    })
}
module.exports= {
    createNewUser
}