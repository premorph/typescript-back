export const queryConstructor={
    queryAuth:{
        auth:'SELECT email,password FROM authentication WHERE email=$1',
        registerAuth: 'INSERT INTO authentication (email, password,type_a) VALUES ($1,$2,$3)',
        verifyRole:'SELECT * FROM authentication WHERE id=$1'
    },
    queryUser:{
        createOne: 'INSERT INTO users (firstname,lastname, address,phone,idauth,status) VALUES ($1,$2,$3,$4,$5,$6)',
        findOne:'SELECT * from users where id=$1',
        updateOne:'UPDATE users SET firstname=$3 , lastname=$4 , address= $5 , phone=$6 , status= $2, updatedAt=current_timestamp where id=$1 ',
        findall:'SELECT * FROM users where status=$1'
    },
    queryRestaurant:{
        findAll:'SELECT * FROM restaurant where status=$1',
        findOne:'SELECT * FROM restaurant where id=$1',
        CreateOne:'INSERT INTO restaurant (name, description, status, lat,long,idauth, schedule,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
        changeStatus:'UPDATE restaurant set status=$2 updatedAt=current_timestamp where id=$1',

    },
    queryCategories:{
        findAll:'',
        findOne:'',
        createOne:'',
        changeStatus:'',
        updateOne:''
    }
}