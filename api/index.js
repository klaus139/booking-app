import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

const connect = () => {
    mongoose.set('strictQuery', false);
    try{
        mongoose.connect(process.env.MONGO);
        console.log('connected to mongoDB');
    } catch(error){
        throw error;
    }
};

mongoose.connection.on('disconnected',()=>{
    console.log('mongodb disconnected');
})

app.get('/', (req, res)=> {
    res.send('hello world')
})

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
 
    return res.status(500).json({
        succes: false,
        status:errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});




app.listen(8080, ()=>{
    connect();
    console.log('connected to backend')
})