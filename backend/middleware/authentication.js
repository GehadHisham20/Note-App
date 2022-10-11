import jwt from 'jsonwebtoken';


const authentication=(request,response,next)=>{
    const token = request.header('token')
    jwt.verify(token, 'user', async function(error, decoded) {
        if(error){
            response.json({message:"error in token",error}) 
        }
        else{
            request.userId=decoded.userId
            next()
        }
    });
}

export default authentication;