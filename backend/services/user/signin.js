import userModel from '../../models/user.model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const signin= async (request,response)=>{
    const {email,password}=request.body
    const isUser=await userModel.findOne({email});
    if(isUser){
        const match = await bcrypt.compare(password,isUser.password)
        if(match){
            let token = jwt.sign({userId:isUser._id }, 'user');
            response.json({message:"success",token})
        }   
        else
            response.json({message:"incorrect password"})
    }else
        response.json({message:"email doesn't exist"})
   
}
export default signin;