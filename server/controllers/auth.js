import  Jwt  from "jsonwebtoken"
import bcrypt from 'bcryptjs'


import users from '../models/Auth.js'



    

export const signup = async (req, res)=>{
    const {name, email, password} = req.body;
    try{
        const exitingUsers = await users.findOne({ email });
        if(exitingUsers){
            return res.status(404).json({massage: "User already Exist...."})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const NewUser = await users.create({ name, email, password: hashedPassword });
        const token = Jwt.sign({email:NewUser.email, id:NewUser._id},process.env.JWT_SECRET , {expiresIn: '1h'});
        res.status(200).json({result:NewUser, token});

    }catch(err){
        res.status(500).json('something went wrong....');
    }
}


export const login = async (req, res)=>{
    const { email, password} = req.body;
    try{
        const exitingUsers = await users.findOne({ email });
        if(!exitingUsers){
            return res.status(404).json({massage: "User don't Exist...."})
        }

        const isPasswordcrt = await bcrypt.compare(password, exitingUsers.password)
        if(!isPasswordcrt){
            return res.status(400).json({massage:"invalid cradentials"})
        }

        const token = Jwt.sign({email:exitingUsers.email, id:exitingUsers._id},process.env.JWT_SECRET , {expiresIn: '1h'})
        res.status(200).json({result:exitingUsers, token })


    }catch(err){
        res.status(500).json('something went wrong....')
    }
}