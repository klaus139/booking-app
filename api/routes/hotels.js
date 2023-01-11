import express from 'express';

import { createHotel, deleteHotel, getHotel, updateHotel, getHotels } from '../controllers/hotel.js';

//import { createError } from '../utils/error.js';
const router = express.Router();

//create
router.post('/', createHotel)
//update
router.put('/:id', updateHotel);
//delete
router.delete('/:id', deleteHotel);
//get
router.get('/:id', getHotel);
//getall
router.get('/', getHotels);


export default router;