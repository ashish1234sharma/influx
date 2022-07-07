const express=require("express")
const connect  = require('./configs/db.js')

const app = express()

app.use(express.json())
const itemscontroller=require("./controllers/itemMaster.controller")
 app.use("",itemscontroller)





app.listen("8080",async ()=>{

    try{
        await connect()
        console.log("8080")

    }catch(e){
        console.log(e.message)
    }
})
