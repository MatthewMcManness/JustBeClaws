const express = require('express');
// import 'body-parser';
// import 'path';
// import 'mysql';
// import {commandLineHandler} from './mode.js';
// const port = '3000';

const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const port = '3000';

// MODE SELECT ---------------------------------------------------------------

// COMMAND LINE ARGUEMENTS ---------------------------------------------------
// let args = process.argv[2];
// if(process.argv.length > 2) {
//     switch (val) {
//         case '-demo':
//             //runDemoMode();
//         break;
//         case '-dedicated':
//             //runDedicatedMode();
//             break;
//         case '':

        
//         default:
//             console.log('No mode specified. Running default...');
//             //runDedicatedMode();
//     }
// }


// SERVER STARTUP ------------------------------------------------------------
//create express server
const app = express();
app.use(express.static(path.join(__dirname,"/")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    next();
});

//start server
app.listen(port, () => {
    console.log(`Server started. Listening on port ${port}...`);
});

//create database connection
const db = mysql.createConnection({
    host: "35.225.59.171",
    user: "admin",
    password: "0123456789",
    database: "JustBeClaws"
});

// connect to database
db.connect((err) => {
    if(err) console.log('Error: ', err.message);
    else console.log('Connected to database...');

})

// db.query('select * from orders', (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     console.log(result[0].name);
// });

// END Points ----------------------------------------------------------------
//home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/homePage.html"));
});

/*
//get full list of orders
app.get('/order-list', (req, res) => {
    let sql = 'SELECT * from orders';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result[0].name);
        res.send(JSON.stringify(result));
    }); 
});
*/

//get full list of orders
app.get('/auth-login', (req, res) => {
    console.log('hi');
    let sql = "SELECT administrator, adopter, foster FROM Users WHERE username = '$username' AND password = '$password'";
    db.query(sql, (err, result) => {
        
        if(err) throw err;
        console.log(result);
        console.log(result[0].name);
        res.send(JSON.stringify(result));
    }); 
});


