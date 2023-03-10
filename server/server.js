const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

mongoose.connect(mongoUrl)
    .then(() => console.log("Connected to database"))
    .catch((e) => console.log(e))
mongoose.set('strictQuery', true);

const usersRouter = require('./routes/users');
app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});