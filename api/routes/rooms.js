import express from 'express';


import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';

//import { createError } from '../utils/error.js';
const router = express.Router();

//create
router.post('/', verifyAdmin, createRoom)
//update
router.put('/:id', verifyAdmin, updateRoom);
//delete
router.delete('/:id', verifyAdmin, deleteRoom);
//get
router.get('/:id', getRoom);
//getall
router.get('/', getRooms);


export default router;