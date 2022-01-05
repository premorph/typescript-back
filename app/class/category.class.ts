import { queryConstructor } from './../database/query/queryConstructor';
import ICategory from "../interfaces/category.interface";
import { query } from '../database/model/data';

export class Category{
    constructor(){}
    public async findOne(id:string|number)
    {
        try {
            let result = await query( queryConstructor.queryCategories.findOne,[id]);

            return result;
        } catch (error) {
            return error
        }
    }

    public async findall()
    {
        try {
            let result = await query( queryConstructor.queryCategories.findAll,[]);

            return result;
        } catch (error) {
            return error
        }
    }

    public async createOne(category:ICategory)
    {
        try {
            let result = await query( queryConstructor.queryCategories.createOne,[]);

            return result;
        } catch (error) {
            return error
        }
    }

    public async  changeStatus(status:number|string , id:number|string)
    {
        try {
            let result = await query( queryConstructor.queryCategories.changeStatus,[id,status]);

            return result;
        } catch (error) {
            return error
        }
    }
    public async updateOne(category:ICategory)
    {
        try {
            let result = await query( queryConstructor.queryCategories.updateOne,[category,category.id]);

            return result;
        } catch (error) {
            return error
        }
    }

}
