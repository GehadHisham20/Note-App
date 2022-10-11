import Joi from "joi";

let schema = Joi.object({
        desc:Joi.string().required()
    });

    const noteValidation=(request,response,next)=>{
        let {error}=schema.validate(request.body);
        if(error){
            response.json({message:'validation error',error});
        }
        else{
            next()
        }   
    }

  export default noteValidation;