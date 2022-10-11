import mongoose from "mongoose";
const schema=mongoose.Schema({
    desc:String,
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }
},{
    timestamps: true
})

const notesModel=mongoose.model("notes",schema);
export default notesModel;