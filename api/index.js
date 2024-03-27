import express from 'express'
import dotenv from 'dotenv'
import mainrouter from './routes/mainroute.js';
import authrouter from './routes/auth.route.js'
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config()

mongoose.connect(process.env.MONGO)
.then(
   console.log("database connected")
)

const app = express()

const PORT=process.env.PORT
 

app.use(express.json())
app.use(cors())

app.listen(PORT,(req,res)=>{
   console.log(`server running at port ${PORT}`)
})
app.use("/",mainrouter)
app.use("/",authrouter)
app.use("/",authrouter)