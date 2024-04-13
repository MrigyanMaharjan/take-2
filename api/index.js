import express from 'express'
import dotenv from 'dotenv'
import mainrouter from './routes/mainroute.js';
import authrouter from './routes/auth.route.js'
import mongoose from 'mongoose';
import addroute from './routes/addroute.js';
import cors from 'cors';
import People from './model/peoplemodel.js';

dotenv.config()

mongoose.connect(process.env.MONGO)
.then(
   console.log("database connected")
)

const app = express()

const PORT=process.env.PORT
 

app.use(cors());
app.use(express.json())


app.listen(PORT,(req,res)=>{
   console.log(`server running at port ${PORT}`)
})
app.use("/",mainrouter)
app.use("/",authrouter)
app.use("/",authrouter)
app.use('/',addroute)

app.get('/add', async (req, res) => {
   try {
       const data = await People.find();
       res.json(data);
   } catch (err) {
       console.error('Error fetching data:', err);
       res.status(500).json({ error: 'Internal server error' });
   }
});

app.post('/likes', async (req, res) => {
   try {
      const {Item}=req.body
      console.log(req.body);
     // Find the like document
     let like = await People.findOne({Item});
 
     like.likes++;
   
     await like.save();
 
     res.send({ count: like.count });
 
   } catch (error) {
     res.status(500).send(error.message);
   }
 });

app.use((err,req,res,next)=>{
   const statuscode=err.statuscode || 500;
   const message=err.message;
   res.json({
      success:false,
      statuscode,
      message,

   })
})