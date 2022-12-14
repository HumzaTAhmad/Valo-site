import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import accountRoutes from './routes/accounts.js'

dotenv.config()

const app = express();

app.use(bodyParser.json({limit: "750mb, extended: true"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());

app.use("/account", accountRoutes);
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))
