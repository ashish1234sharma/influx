const express= require('express')
const router= express.Router()
const Items=require('../models/itemmaster.model.js')


router.post("/items",async (req,res)=>{

    try{
        const item=await Items.create(req.body)
        return res.status(201).send(item)
    }catch(e){
        res.status(400).send(e.message)
    }
})
module.exports=router