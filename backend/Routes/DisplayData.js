const express = require('express')
const router = require('./CreateUser')
// const router=express.Router()

router.post('/foodData',(req,res)=>{
    try{
        console.log(global.fooditems,global.foodcategory)
        res.send([global.fooditems,global.foodcategory])
    }
    catch(error){
        console.log(error.message)
        res.send("Server Error")
    }
})
module.exports = router;