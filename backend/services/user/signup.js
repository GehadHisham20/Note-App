import userModel from '../../models/user.model.js';
import bcrypt from 'bcrypt'
let signup=async (request,response)=>{
    const {firstname,lastname,email,password,age}=request.body
    const isUser=await userModel.findOne({email});
    if(isUser){
        response.json({message:"email already exists"})
    }else{
        bcrypt.hash(password,4,async(error,hash)=>{
            await userModel.insertMany({
                firstname,
                lastname,
                email:email,
                password:hash,
                age:age
            })
             response.json({message:"success"})
        })
        
    }
   
}
export default signup;