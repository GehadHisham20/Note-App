import notesModel from '../../models/note.model.js';

let updateNote=async (request,response)=>{
    const noteId=request.header('noteId')
    const {desc}=request.body
    //find by note id and user id to grantee that no user can update 
    //except the owner of note
    let result=await notesModel.findOneAndUpdate({_id:noteId,createdBy:request.userId},{desc})
    if(result){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no note found"});
    }
}
export default updateNote;