import express from 'express';

import { createHotel, deleteHotel, getHotel, updateHotel, getHotels } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

//import { createError } from '../utils/error.js';
const router = express.Router();

//create
router.post('/', verifyAdmin, createHotel)
//update
router.put('/:id', verifyAdmin, updateHotel);
//delete
router.delete('/:id', verifyAdmin, deleteHotel);
//get
router.get('/:id', getHotel);
//getall
router.get('/', getHotels);


export default router;