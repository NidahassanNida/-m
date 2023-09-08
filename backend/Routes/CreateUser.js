const express = require('express')
const router=express.Router()
const user=require('../models/User')
const jwt=require('jsonwebtoken');
const jwtSeceret="IAmDevelopingMernSTACKWebsiteOfFoodOrderingSystem"

router.post("/signin",async(req,res)=>{
    try{
        let useremail = await user.findOne({ email: req.body.email });
        // let password=req.body.password
        if(useremail){
            return res.status(400).json({errors:"user email present"})
        }
        if(req.body.password.length < 8){
            return res.status(400).json({errors:"password length"})
        }
        // else if (req.body.password.value.length < 8) {
        //     return res.status(400).json({errors:"paswwor d"})
        // }
        else{
        await user.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            address:req.body.address
        })
    // const authToken = jwt.sign(data, jwtSeceret);
    // res.json({success: true, authToken:authToken });
    res.json({sucess:true});
    }}      
    catch(error){
        console.log(error);
        res.json({sucess:false})
    }
})


router.post("/login",async(req,res)=>{
    try{
        // let useremail=await user.findOne(email)
        let useremail = await user.findOne({ email: req.body.email });
        if(!useremail){
            return res.status(400).json({errors:"Invalid Email address"})
        }
        // let useremail=await user.findOne(email)
        if(req.body.password !== useremail.password){
            return res.status(400).json({errors:"Invalid password"})
        }
        const data={
            user:{
                id:useremail.id
            }
        }
        const authToken = jwt.sign(data, jwtSeceret);
        res.json({success: true, authToken:authToken });
        // res.json({success: true, username:req.body.name });
        }
    catch(error){
        console.log(error);
        res.json({sucess:false})
    }
})
module.exports = router;
const app = express()