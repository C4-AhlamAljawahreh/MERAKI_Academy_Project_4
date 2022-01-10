const roleModel = require ('../database/models/roleSchema')

const createNewRole = (req,res)=>{
    const {role,permissions}=req.body;
    const newUser = new roleModel ( {role,permissions})
    newUser.save().then((result)=>{
        res.status(201)
        res.json({success:true, result:result})
    }).catch((err)=>{
        res.status(500);
        res.json(err);
    })
}
module.exports= {
    createNewRole
}