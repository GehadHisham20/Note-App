import notesModel from '../../models/note.model.js';

let addNote=async (request,response)=>{
    const {desc}=request.body
    let result=await notesModel.insertMany({desc,createdBy:request.userId})
    if(result.length==0){
        response.json({message:"note didn't added"});
    }
    else{
        response.json({message:"success",result});
    }
    
   
}
export default addNote;