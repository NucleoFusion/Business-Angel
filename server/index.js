import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/message', (req,res)=>{
    res.json({
        message: 'Sent data thorugh express API'
    });
}); 

app.listen(4000, ()=>{
    console.log('listening at port 4000');
});