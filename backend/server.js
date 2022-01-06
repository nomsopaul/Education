const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 
// const path = require('path');
const cors = require("cors");
// const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;





app.use(cors());
app.use(express.json());


const URI = 'mongodb+srv://dbuser1:Uchenna14@cluster0.jk642.mongodb.net/eduuse'
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }
    );
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("mongo de work ");
// })
mongoose.connection.on('connected', () => {
    console.log('works oooo')
})

// mongoose.connect("mongodb+srv://dbuser1:<Uchenna14>@cluster0.jk642.mongodb.net/eduuse")

// app.use(morgan('tiny'));
// app.get('/api', (req, res) => {
//     const data = {
//         username: 'emma',
//         age : 5
//     };
//     res.json(data);
// });
// app.get('/api', (req, res) => {
//     const data = {
//         username: 'paul',
//         age : 15
//     };
//     res.json(data);
// // });
// app.listen(PORT, console.log(`Server is on at ${PORT}`));
app.use("/", require("../backend/routes/userRoute"));

app.listen(PORT, () => {
    console.log("express de work");
})
