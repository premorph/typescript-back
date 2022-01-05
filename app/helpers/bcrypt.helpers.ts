import bcrypr from 'bcrypt';


export const encrypt = async(textPlain:string)=>{
const hash = bcrypr.hash(textPlain,10)
return hash

}

export const compare=async(passwordplain:string,hashpassword:string)=>{
return await bcrypr.compare(passwordplain,hashpassword)
}