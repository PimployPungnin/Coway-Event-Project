// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoute = require('./registerRoute');

const app = express();
const PORT = 5000;

// เชื่อมต่อ MongoDB
mongoose.connect('mongodb://localhost:27017/registrationDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

// ใช้ middleware body-parser เพื่อประมวลผลข้อมูล JSON
app.use(bodyParser.json());

// เรียกใช้ route สำหรับการลงทะเบียน
app.use('/', registerRoute);

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
