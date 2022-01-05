require('dotenv').config();
import express from "express";
import { dbConection } from "../database/model/data";
import * as bodyParser from "body-parser";
export class Server {
    public app: express.Application;
    public port: string | number;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ||3200;
        this.initServer();
        this.connectionDB();
        this.config();
        this.router();
    }
    initServer(){
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
    connectionDB(){
        dbConection();
    }
    router(){
        this.app.use('/api/1.0',require('../routes/index'))  
     }

    config(){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
    }
}
