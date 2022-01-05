
import { Request, Response } from "express";
import { User } from "../../class/user.class";
import { httpError } from "../../helpers/httpHandler.helpers";
export const createOne = async (req: Request, res: Response) => {
    const { firstname, lastname, address, phone, idauth, status } = req.body
    const id = ''
    try {

        const user = new User(
            id,
            firstname,
            lastname,
            address,
            phone,
            idauth,
            status
        )
        const result: any = await user.createOne(user)
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
                        text: 'Ya existe un usuario registrado'
                    }
                })

            }
        }
        return res.status(200).json({
            ok: true,
            message: { text: 'Datos Registrados' }
        })
    } catch (err) {
        return httpError(res, err)
    }
}
export const findOne = async (req: Request, res: Response) => {
    const
        {
            id
        } = req.params

    const user = new User(
    );
    const result: any = await user.findOne(id)
    if (result.rowCount == 0) {
        return res.status(400).json({
            ok: false,
            message: { text: 'No existen Resultados' }
        })
    }
    return res.status(200).json({ ok: true, User: result.rows })
}
export const updateOne= async (req:Request,res:Response)=>{
  try {
    const {id} =req.params
    const {status,firstname,lastname,address,phone} =req.body
    const data={status,firstname,lastname,address,phone,id}
    const user = new User()
    const result:any= await user.updateOne(data);
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
export const findall= async (req:Request,res:Response)=>{

    try {
        const {status} =req.body
        const user= new User();
        const result:any= await user.findAll(status);
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
