import express from "express";
import users from './routes/users.js';
import products from './routes/products.js';
import pay from './routes/pay.js'
import cors from 'cors';
import { db } from "./db/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);
app.use("/products", products);
app.use("/pay", pay);

app.get('/', (req, res) => {
    res.send('why World!')
})

app.listen(1111,function(){
    console.log("port 1111 is open");
})

export default app 
