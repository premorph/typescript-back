
import { query } from "../database/model/data";
import { queryConstructor } from "../database/query/queryConstructor";
import { IUser } from "../interfaces/user.interface";


export class User {
    public id        ?:string;
    public firstname ?:string;
    public lastname  ?:string;
    public address   ?:string;
    public phone     ?:string;
    public idauth    ?:number;
    public status    ?:string;
    public img       ?:string;
    public balance   ?:string;
    constructor(
        id           ?:string,
        firstname    ?:string,
        lastname     ?:string,
        address      ?:string,
        phone        ?:string,
        idauth       ?:number,
        status       ?:string,
        img          ?:string,
        balance      ?:string,
        ){
            this.firstname=firstname;
            this.lastname=lastname;
            this.address=address;
            this.phone=phone;
            this.idauth=idauth;
            this.balance=balance;
            this.status=status;
            this.img=img;
            this.id=id;
    }
async createOne(user:IUser){
try {
    const { firstname,lastname,address,phone, idauth,status} = user
    const result =await query(queryConstructor.queryUser.createOne,[firstname,lastname,address,phone, idauth,status])
    return result
} catch (err) {
    return err
}
}
async findOne(id:number|string){
        try {
            const result = await query(queryConstructor.queryUser.findOne,[id]);
            return result       
        } catch (error) {
            return error
        }
}
async updateOne(user:IUser){
    try {
        const {id,status,firstname,lastname,address,phone} =user
        const result =await query(queryConstructor.queryUser.updateOne,[id,status,firstname,lastname,address,phone])
        return result

    } catch (error) {
        return error
    }
}
async findAll(status:string | number){
    try {
        const result= await query(queryConstructor.queryUser.findall,[status])
        return result
    } catch (error) {
        
    }
}

}