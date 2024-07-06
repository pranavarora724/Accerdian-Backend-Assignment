import express from "express";
import "dotenv/config"
import cors from 'cors'
// import formRoute from './routes/FormRoutes'
import formRoute from './routes/FormRoutes.js';

const app = express();

// const formRoute = require('./routes/FormRoutes');



app.use(cors(corsOption));

app.use("/api/v1/form",formRoute);

app.get("/"  ,  (req,res) =>{
    return res.json({
        success:true,
        message:'App running . This is default route'
    })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT , ()=>{
    console.log(`Server Running at port ${PORT}`);
})
