import notesModel from '../../models/note.model.js';

let deleteNote=async (request,response)=>{
    let noteId=request.header('noteId')
    //find by note id and user id to grantee that no user can delete 
    //except the owner of note
    let result=await notesModel.deleteOne({_id:noteId,createdBy:request.userId})
    if(result.deletedCount==1){
        response.json({message:"success"});
    }
    else{
        response.json({message:"no note found"});  
    }
}
export default deleteNote;