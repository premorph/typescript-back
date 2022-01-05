import jwt from 'jsonwebtoken'


export const tokenSign= async(auth:any)=>{
    return jwt.sign({
        id:auth.id,
        role:auth.role
    },
    'S33D-H4RD-T0-D3CRYPT',{
        expiresIn:'0'
    })
}
export const verifyToken =async(token:any)=>{

    try {
        const verify = jwt.verify(token,'S33D-H4RD-T0-D3CRYPT')
        return verify
    } catch (error) {
        return null
    }
}
