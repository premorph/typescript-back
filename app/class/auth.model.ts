import { query } from "../database/model/data";
import { queryConstructor } from "../database/query/queryConstructor";
import { IAuth } from "../interfaces/auth.interface";


export class Auth {
    public email?:string;
    public password?:string;
    public type_a?:string;
    public role?:string| number;
    constructor(
        email?:string,
        password?:string,
        type_a?:string
    ){

        this.email=email;
        this.password=password;
        this.type_a=type_a

    }
public async findOne(id:number|string)
{
    try {
        const result =await query(queryConstructor.queryAuth.verifyRole,[id])
        return result
    } catch (error) {
        return error
    }
}
  async  login(auth:IAuth){

    try {
         const {email}=auth
    const result=    await query(queryConstructor.queryAuth.auth,[email]);
        return result
    } catch (error) {
        return error
    }
     
    }
    logOut()
   {

   } 
  async  register(auth:IAuth){
    const {email, password,type_a}=auth
    try {
       const result= await query(queryConstructor.queryAuth.registerAuth,[email,password, type_a])
            return result
    } catch (error) {
        return error
    }
    
   }
   createToken(id:number){

   }
   verifyToken(token:string){

   }
}