require('dotenv').config()

import { Pool } from 'pg';


const poolOptions = {
    host: 'localhost',
    port: 5432,
    user: 'dev',
    password: 'DEv123',
    database: 'delivery_ionic',
};

const pool = new Pool(poolOptions);

export const query = async (text: string, params: any[]) => {
    const result = await pool.query(text, params);
    return result
}
export const dbConection = async () => {
    const result = await query('SELECT NOW()', []);
    return result
};
