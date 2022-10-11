import notesModel from '../../models/note.model.js';

let getNotes=async (request,response)=>{
    let result=await notesModel.find({}).populate('createdBy','firstname lastname -_id')
    if(result.length!=0){
        response.json({message:"success",result});
    }
    else{
        response.json({message:"no notes found"});
    }
   
}
export default getNotes;