const mongoose=require('mongoose')

const TaskSchema= new mongoose.Schema({
    name:{
        type:String,
        required :[true,'must provide a value'],
        trim:true,
        maxlength:[20,'name cannot be this long'],
    },completed:{
        type:Boolean,
        default:false,  //completed is set to false by default if we dont provide a value
    },
})    //set structure for our database in mongo as mongo accepts anything

module.exports=mongoose.model('tasks', TaskSchema) // A model is a class based on the schema, 
// which provides methods to interact with the MongoDB collection (e.g., find(), save(), update(), delete()). 
// It can be thought of as a constructor that creates documents in the MongoDB collection.