import notesModel from '../../models/note.model.js';

let getUserNotes=async (request,response)=>{
    let result=await notesModel.find({createdBy:request.userId})
    if(result.length!=0){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no notes found"});
    }
   
    
   
}
export default getUserNotes;