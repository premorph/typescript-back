import { NextFunction, Response } from 'express';
import { Auth } from '../class/auth.model';
import { verifyToken } from '../helpers/generateToken.helpers';
export const checkRoleAuth= (role:any)=> async(req:any,res:Response,next:NextFunction)=>{
try {
    
    const token = req.headers.authorization.splice(' ').pop();
    const tokenData:any= await verifyToken(token);
    const auth = new Auth();
    const authData:any =await auth.findOne(tokenData.id);
    const result : any = authData[0].role;

    if([].concat(role).includes(result)){
            next()
    }
    else{
        return  res.status(409).json({ok:false,error:'Unautorizet'})
    }
} catch (error) {
    return error
}
}