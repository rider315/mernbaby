require("dotenv").config();
const express=require("express");
const cors=require('cors');
const app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router");
const adminRoute=require("./router/admin-router");
const connectDB=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
// const corsOptions={
//     origin:(origin,callback)=>{
//         const allowedOrigins=[
//             "http://localhost:5173",
//             "http://localhost:4173",
//             "https://ridescom.com",
//             "https://www.ridescom.com",
//             "https://api.ridescom.com",
//             "https://api.www.ridescom.com",
//         ];
        
//         const isAllowed=allowedOrigins.includes(origin);
//         callback(null,isAllowed ? origin: false);

//     },
//     methods:"GET, POST, PUT,DELETE,PATCH,HEAD",
//     credentials:true,
// };


    // origin:"http://localhost:5173",
    // // origin:"http://ridescom.com",

// app.use(cors(corsOptions));

app.use(cors({
    origin: '*',
  }));
app.use(express.json());

app.use("/api/auth",authRoute);

app.use(errorMiddleware);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
app.use("/api/admin",adminRoute);

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome Rider Infinity");
// });
// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to Registration Page");
// });


const PORT=5000;
connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running at port:${PORT}`);
        
    });
});


