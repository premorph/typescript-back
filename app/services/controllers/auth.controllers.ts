
import { Request } from 'express';
import { Auth } from '../../class/auth.model';
import { compare, encrypt } from '../../helpers/bcrypt.helpers';
import { httpError } from '../../helpers/httpHandler.helpers';




export const AuthCtrl = async (req: any, res: any) => {

    try {
        const {
            email, password
        } = req.body
console.log(email)
        const auth = new Auth(
            email, password
        )
        const result:any = await auth.login(auth);
         if(result.rows==0){
             return res.status(400).json({ok:false,
            message:{text:'no se encuentra registrado'}})        }
            const user=result.rows[0];
        const checkPassword= await compare(password,user.password)
        if(checkPassword){
            return res.json({ok:true,
                resutl:result.rows})   
        }
        else{
            return res.status(401).json({
                ok:false,
                message:{text:'email or password incorrect  '}
            })
        }
         
    } catch (error) {
        return httpError(res, error)
    }
}

export const registerCtrl = async (req: any, res: any) => {
    try {
        const {
            email,
            password,
            type_a
        } = req.body
        
        var token:string
       const passwordhash = await encrypt(password)
        const auth = new Auth(
            email, passwordhash,
            type_a
        )
        const result:any = await auth.register(auth);

        if(result.name=='error' && result.code=="23505")
        {
            return res.status(400).json({
                ok:false,
                message:{text:'Ya se encuentra registrado un usuario con ese correo'}
            })
        }
        return res.status(200).json({
            ok: true,
            message:{text:'Usuario registrado'}
        })
    } catch (error) {
        return httpError(res, error)
    }
}