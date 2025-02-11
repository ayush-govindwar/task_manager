
const Task= require('../models/task')


const getAllTasks= async (req,res)=>{
    try {
        const tasks= await Task.find({}) //.find with empty string inside returns all tasks
        res.status(200).json({tasks})// tasks is array
    } catch (error) {
        res.status(500).json(  'there was an error' )
    }
}
// middleware functions
const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json(  'there was an error' )
        
    }
    
    
}
const getTask = async(req,res)=>{
    try {
        const{id:taskID}=req.params //const taskID = req.params.id;
        const task=await Task.findOne({_id:taskID})
        if(!task){ //if no task found as findone returns null 
            return res.status(404).json({msg:`no task with id :${taskID}`})
        }


        res.status(200).json({task})
    } catch (error) {
        res.status(500).json(  'there was an error' )
    }

    
}
const updateTask = async (req,res)=>{
    try {
        const{id:taskID}=req.params;
        const task= await Task.findOneAndUpdate({_id:taskID},req.body,{new :true, runValidators:true}) //req.body is the data to
        // update task with and new:true means return new (updated) value instead of old one
        res.status(200).json({id:taskID, data:req.body})

        if(!task){ //if no task found as findone returns null 
            return res.status(404).json({msg:`no task with id :${taskID}`})
        }
    } catch (error) {
        res.status(500).json(  'there was an error' )
    }
}




const deleteTask = async(req,res)=>{
    try {
        const{id:taskID}=req.params
        const task= await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with id :${taskID}`}) 
        }
    res.status(200).json({task})
    } catch (error) {
        res.status(500).json(  'there was an error' )
    }
    
}


module.exports= {
    getAllTasks, createTask,getTask,deleteTask,updateTask
}