import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'

import userRoutes from "./routes/user.js";
import questionRoutes from './routes/Question.js'
import answerRoutes from './routes/Answers.js'

dotenv.config()

const app = express();
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.get('/',(req,res)=>{
    res.send('This is a stack overflow clone api')
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer' ,answerRoutes)




const port = process.env.port || 5000
const database_url = process.env.CONNECTION_URL
mongoose.connect(database_url, {useNewUrlParser: true, useUnifiedTopology: true})
                                          .then(()=>(app.listen(port,()=>{console.log(`server is running on ${port}`)})))
                                          .catch((err)=>console.log(err.message));