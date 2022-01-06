export interface IAuth
{
    email?:string;
    password?:string;
    type_a?:string;
    role?:string | number;
    isLoggin?:number;
    status?:number | string
}