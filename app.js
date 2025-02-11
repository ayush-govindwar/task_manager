const connectDB =require('./db/connect')
//create server same as http create server
const express=  require('express')
const app = express();
const tasks= require('./routes/tasks')
require('dotenv').config() //This method loads the 
// environment variables from the .env file and makes 
// them accessible through process.env. Essentially, it 
// reads the contents of the .env file and sets the key-value pairs as environment variables for your application
//middleware
app.use(express.static('./public'))
app.use(express.json())


// get request from /about path and res sent
app.get('/hello', (req, res) => {
    res.send('Task manager app ');
})

//use task router for /api/v1/tasks
app.use('/api/v1/tasks', tasks);



// /api/v1 maybe you will change version of api 
const port = 5000;

const start= async()=> {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
        console.log(`portlistening at ${port}`);
        })

    } catch(error) {
        console.log(error)
    }
}

start()