
import { query } from "../database/model/data";
import { queryConstructor } from "../database/query/queryConstructor";
import { IRestaurat } from "../interfaces/rest.interface";


export class Restaurant{

    public id ?:number
    public name ?: string;
    public address ?: string;
    public logo ?:string;
    public description ?: string;
    public lat ?:string;
    public long?: string;
    public status ?:string
    public idauth ?: string | number
    public schedule ?:string;
    constructor(
        id?: number,
        name?: string,
        address?: string,
        logo?:string,
        description?: string,
        lat?:string,
        long?: string,
        status ?:string,
        idauth ?: string | number,
        schedule ?:string
    ){
        this.id = id;
        this.name = name;
        this.address = address;
        this.logo = logo;
        this.description = description;
        this.lat = lat;
        this.long = long;
this.idauth=idauth;
        this.status=status
        this.schedule=schedule
    }
 
    public async findAll(status:number|string){
        try {
            const result = await query(queryConstructor.queryRestaurant.findAll,[status])
            return result
        } catch (error) {
            return error
        }
    }
    public async  findOne(id:number|string){
        try {
            const result=await query(queryConstructor.queryRestaurant.findOne,[id])
            return result
        } catch (error) {
            return error
        }
    }
    public async createOne(restaurant:IRestaurat){
        try {
            const { name,description,lat,long,status,idauth,schedule, address }=restaurant
            const result = await query(queryConstructor.queryRestaurant.CreateOne,[name, description, status, lat,long,idauth, schedule, address])
            return result
        } catch (error) {
            return error
        }
    }
    public async changeStatus(status:string |number,id:number |string){

        try {
            const result =await query(queryConstructor.queryRestaurant.changeStatus,[id,status])
            return result
        } catch (error) {
            return error
        }
    }
    
}