
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/generateToken.helpers";

export const checkAuth =async(req:any,res:Response,next:NextFunction)=>{

    try {
        const token=req.headers.authorization.split('').pop()
        const tokenData:any = await verifyToken(token);
        if(tokenData.id){
            next();
        }
else{
  return  res.status(409).json({error:'Unautorizet'})
}
    } catch (error) {
        return res.status(409).json({error:'Unautorizet'})
    }

}