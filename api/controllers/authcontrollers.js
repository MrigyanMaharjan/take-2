import User from "../model/usermodel.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const signup = async (req, res) => {
  dotenv.config()
  console.log(req.body)
    const { username, password, email } = req.body;

     if (!username || !password || !email || username === '' || password === '' || email === '') {
        return res.status(400).json({ message: "All fields required" });
    }


    const hashedpassword= bcryptjs.hashSync(password,10);
  const newuser= new User({
    username,
    password:hashedpassword,
    email
  })
 try{
        await newuser.save();
        return res.status(201).json({ message: "User created successfully" });
 }catch(error){
  return res.status(400).json({ message: "error" });

 }
};

export default signup;


export const signin = async (req, res) => {
  
  console.log(req.body)
    const { password, email } = req.body;

     if ( !password || !email || password === '' || email === '') {
        return res.status(400).json({ message: "All fields required" });
    }


 try{
       const validuser = await User.findOne({email});
       if(!validuser){
        return console.log("usernotfound")
       }
  
       const validpassword= bcryptjs.compareSync(password,validuser.password);

if(!validpassword){
  return console.log("invalidpassword");
}

const token= jwt.sign(
  {id:validuser._id},process.env.jwtsecret
);
res.status(200).cookie("access_token",token,{
  httpOnly:true
}).json("signed in");

 }catch(error){
  return res.status(400).json({ message: "failed" });

 }
};



