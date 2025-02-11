const mongoose =require('mongoose')



const connectDB=(url)=>{
return mongoose.connect(url,{
    useNewUrlParser: true, // Helps parse MongoDB connection strings properly
    useUnifiedTopology: true, // Opts into new connection management engine
    useCreateIndex: true, // Prevents deprecation warnings for index creation
    useFindAndModify: false, // Avoids deprecation of findAndModify

})
} 
module.exports = connectDB
