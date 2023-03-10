const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = process.env.NODE_ENV.PORT || 5000;
const mongoUrl = process.env.NODE_ENV.MONGO_URL

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(mongoUrl)
    .then(() => console.log("Connected to database"))
    .catch((e) => console.log(e))
mongoose.set('strictQuery', true);

const usersRouter = require('./routes/users');
app.use('/user', usersRouter);