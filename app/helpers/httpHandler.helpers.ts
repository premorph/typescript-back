export const httpError = (res:any, err:any) => {
    console.log(err)
    res.status(500)
    res.send({ error: 'algo ocurrio' })
}