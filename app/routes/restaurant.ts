
import { Router } from "express";
import { findAllRestCtrl, registerRestCtrl, findOneRestCtrl, ChangeStautRestCtrl } from "../services/controllers/rest.controller";
const router=   Router();
router.get('/',    findAllRestCtrl);
router.post('/',   registerRestCtrl);
router.get('/:id', findOneRestCtrl);
router.put('/:id',  ChangeStautRestCtrl)

module.exports=router