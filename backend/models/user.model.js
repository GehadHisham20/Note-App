import mongoose from "mongoose";
const schema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    age:Number
},{
    timestamps: true
}
)

const userModel=mongoose.model("user",schema);
export default userModel;