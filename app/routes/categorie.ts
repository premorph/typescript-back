import { Router } from "express";
const router=   Router();


router.get('/');
router.get('/:id');
router.put('/:id');
router.post('');
router.put('/change/:id');


module.exports=router