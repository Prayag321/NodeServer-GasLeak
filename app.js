const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.use(function(req, res, next) {//for  cross-origin request block
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//import routes
const SensorData_routes = require("./routes/SensorData");
const receiveData_routes = require("./routes/ReceiveData");
const sendSms_routes = require("./routes/SendSms");

const connectDB = require("./db/connect");

app.get("/",(req,res)=>{ res.status(200).send('Hello');});//test

app.use("/api/sensordata",SensorData_routes);//set souter middleware for api
app.use("/receiveData",receiveData_routes);//for receiving data from nodemcu
app.use("/sendSms",sendSms_routes)

const start = async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`server is running on ${port} port `);
        })
    }catch(error){
        console.log(error);
    }
}
start();