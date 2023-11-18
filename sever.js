const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

//connect to data base
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '@769Bananas',
        database: 'tacker_db'
    },
    console.log('Connected')
);

// app.listen(PORT, () => {
//     console.log(`Hey, I'm listening to you from port ${PORT}`)
// });

module.exports = db;