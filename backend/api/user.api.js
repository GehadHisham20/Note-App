import  express  from "express"
import  signup  from '../services/user/signup.js';
import signin from './../services/user/signin.js';
import userValidation from '../middleware/validation/user.validation.js';
const userRouter=express.Router()

userRouter.post('/signup',userValidation,signup)
.post('/signin',signin)


export default userRouter;