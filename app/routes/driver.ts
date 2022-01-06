import { Router } from "express";
const router=   Router();


router.get('',(req:Request,res:any)=>{
  return  res.send('hellow')
});

module.exports=router