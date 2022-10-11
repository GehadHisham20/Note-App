import Joi from "joi";

let schema = Joi.object({
      firstname: Joi.string().alphanum().min(3).max(15).required(),
      lastname: Joi.string().alphanum().min(3).max(15).required(),
      age: Joi.number().integer().min(10).max(90),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"))
      .messages({
        'string.pattern.base': `password must be minimum 8 characters and contain uppercase, lowercase, and number`
      }),
      cPassword: Joi.ref("password"),
      });

    const userValidation=(request,response,next)=>{
        let {error}=schema.validate(request.body, { abortEarly: false });
        if(error){
            response.json({message:'validation error',error:error.details});
        }
        else{
            next()
        }
        
    }

  export default userValidation;