const mongoose = require("mongoose");
// mongodb://localhost:27017/GasLeakeSystem   localhost
const uri = "mongodb+srv://nanabhoir321:7veY3rCXY872zflm@cluster0.gdegbz0.mongodb.net/"
const connectDB =()=>{
    console.log("Db connected to server");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
module.exports = connectDB;
