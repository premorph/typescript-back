
import { Response, Router } from "express";
import { createOne, findOne, updateOne } from "../services/controllers/user.controllers";
const router=   Router();


router.post('/', createOne);
router.get('/:id',findOne)
router.put('/:id',updateOne)
module.exports=router