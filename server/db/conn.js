const mongoose = require("mongoose");

const DB = "mongodb+srv://PriyaRagini:rootpassword@cluster0.losxxo2.mongodb.net/project1?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})