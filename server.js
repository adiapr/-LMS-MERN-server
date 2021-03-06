import express from 'express';
import cors from "cors";
import morgan from 'morgan';
import 'dotenv/config' ;

// create express app
const app = express();

// apply middleware 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next)=> {
    console.log('this is my own middleware');
    next();
});

// route 
app.get('/', (req, res) =>{
    res.send('you hide server endpoint');
})

// port 
const port = process.env.PORT || 8000;

app.listen(port,  () => console.log(`Server is running on port ${port}`));