import { checkRoleAuth } from './../middlewares/roleauth.middleware';

import { Router } from "express";
import { AuthCtrl, registerCtrl } from "../services/controllers/auth.controllers";
const router=   Router();


router.post('/login', AuthCtrl)
router.post('/register', registerCtrl)


module.exports=router