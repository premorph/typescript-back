import { IItem } from "./item.interface";
export interface IOrder {
    
    id           ?:number;
    idDriver     ?:number;
    idClient     ?:number;
    idRestaurant ?:number;
    item         ?:IItem[];
    total        ?:number;
    date         ?:Date;
    status       ?:string;
    payment      ?:string;
    address      ?:string;

}