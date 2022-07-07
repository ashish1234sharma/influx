const mongoose=require('mongoose')

const connect=()=>{

    
        mongoose.connect("mongodb+srv://12345:12345@cluster0.n7mbfzi.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = connect