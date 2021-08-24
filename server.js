const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000; 
const MONGO_DB = process.envMONGO_DB
const {getFlowers,createFlower,getFavFlower,deleteFlower,updateFlower} = require('./controller/Flower.controller');
mongoose.connect(MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true});


app.get('/flowers',getFlowers);
app.get('/favFlower',getFavFlower);
app.post('/addFlower', createFlower);
app.delete('/deleteFlower/:id',deleteFlower);
app.put('/updateFlower/:flower_id',updateFlower);
app.listen(PORT,()=>{console.log('listening to port',PORT);})

