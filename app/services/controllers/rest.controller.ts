
import { Request, Response } from "express";
import { Restaurant } from "../../class/rest.class";
import { httpError } from "../../helpers/httpHandler.helpers";


export const registerRestCtrl = async(req:Request,res:Response)=>{
    try {
        const body= req.body
        const restaurant =new Restaurant(body);
        const result:any= await restaurant.createOne(restaurant);
         if (result.severity == 'ERROR') {
            if (result.code == '23502') {
                return res.status(400).json({
                    ok: false,
                    message: {
                        text: 'Todos los datos son necesarios',
                        column: result.column
                    }
                })

            }
            if (result.code == '23505') {
                return res.status(400).json({
                    ok: false,
                    message: {
                        text: 'Ya existe un Restaurant registrado'
                    }
                })

            }
        }
        return res.status(200).json({
            ok: true,
            message: { text: 'Datos Registrados' }
        })
    } catch (error) {
        return httpError(res,error)
    }

}
export const findOneRestCtrl = async(req:Request,res:Response)=>{
    try {
        const { id}=req.params
        const restaurant =new Restaurant();
        const result:any= await restaurant.findOne(id)
        if (result.rowCount == 0) {
            return res.status(400).json({
                ok: false,
                message: { text: 'No existen Resultados' }
            })
        }
        return res.status(200).json({ ok: true, User: result.rows })
    } catch (error) {
        return httpError(res,error)
    }
    
}
export const findAllRestCtrl = async(req:Request,res:Response)=>{
    try {
        const {status}=req.params
        const restaurant =new Restaurant();
        const result:any= await restaurant.findAll(status)
        if(result.rowCount==0){
            return res.status(400).json({ok:false, message:{text:'No se encontraron resultados'}})
        }
        return res.status(200).json({
            ok:true,
            users:result.rows
        })
    } catch (error) {
        return httpError(res,error)
    }
    
}
export const ChangeStautRestCtrl = async(req:Request,res:Response)=>{
    try {
        const 
    {
        status
    } =req.body
    const { id}=req.params
        const restaurant =new Restaurant();
        const result:any= await restaurant.changeStatus(status,id)
        if(result.rowCount==0)

        {
           return res.status(400).json({
               ok:false,
               message:{text:'No se pudo actualizar el registro'}
           }) 
        }
    return res.status(200).json({
        ok:true,
        message:{text:'usuario actualizado' }
    })
    } catch (error) {
        return httpError(res,error)
    }    
}
