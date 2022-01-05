import { IAuth } from './auth.interface';
export interface IUser {
    id        ?:string|number
    firstname ?:string;
    lastname  ?:string;
    address   ?:string;
    phone     ?:string;
    idauth    ?:number;
    status    ?:string;
    balance?  :string
    img?      :string;
}