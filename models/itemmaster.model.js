const mongoose= require("mongoose")

const ItemMaster= mongoose.Schema({

    code:{type:'number',required:true,unique:true},
    name:{type:'string',required:true},
    price:{type:'number',required:true}
})

module.exports=mongoose.model("item",ItemMaster)