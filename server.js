const express = require('express');
const session = require('express-session');
const cors = require('cors');

const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const { is } = require('express/lib/request');
const port = '3000';

//users
let users = [{username:'user', password:'password'}];

// SERVER STARTUP ------------------------------------------------------------
//create express server
const app = express();
app.use(cors()); //enables all cors
app.use(session({secret:'secret key'})); //session middleware
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
    user: "james",
    password: "0123456789",
    database: "JustBeClaws"
});

// connect to database
db.connect((err) => {
    if(err) console.log('Error: ', err.message);
    else console.log('Connected to database...');

})

// END Points ----------------------------------------------------------------
//login
app.post('/login', (req,res) => {
    let isLoggedIn = false;

    //query list of users
    let sql = 'SELECT username, password FROM Users';
    db.query(sql, (err,result) => {
        if(err)throw err;

        //compare each user to given credentials
        result.forEach(user => {
            if(user.username == req.body.username && user.password == req.body.password) {
                console.log("LOGGED IN as ",user.username);

                //create session user
                req.session.username = user.username;

                //open new page
                isLoggedIn = true;
                
            }
        });

        res.json({ success: isLoggedIn});
    });
});

//gession data
app.get('/session-data', (req,res)=> {
    console.log('/session-data called, user: ',req.session.username);
    if(req.session.username) {
        //query session user role
        let sql = `SELECT administrator, adopter, foster FROM Users WHERE username='${req.session.username}'`;
        db.query(sql, (err,result) => {
            if(err)throw err;
            let roles = {
                adopter: JSON.stringify(result[0].adopter)[25],
                foster: JSON.stringify(result[0].foster)[25],
                administrator: JSON.stringify(result[0].administrator)[25]
            }
            res.send(roles);
        });
    }
    
});

app.post('/signup', (req,res) => {

    // inserts a new user into the database. by default they are an adopter
    let sql = `INSERT INTO Users (username, password, first_name, last_name, logged_in, administrator, adopter)
                      VALUES ('${req.body.username}', '${req.body.password}', '${req.body.first_name}', '${req.body.last_name}', '1', 0, 1)`;
    db.query(sql);
});

app.post('/getCatPicture', (req,res) => {

    // obtain a picture of a cat given its name
    let sql = `SELECT main_image FROM Animals WHERE name = '${req.body.catName}'`;
    db.query(sql, (err,result) => {
        if(err)throw err;

        result.forEach(user => {
            res.send(JSON.stringify(user.catName));
        })
    });
});




//home
app.get('/', (req, res) => {
    console.log('/ called');
    res.sendFile(path.join(__dirname, "/homePage.html"));

    //check which user is logged in, if any
    if(req.session.user) {
        console.log('session user',req.session.user);
    }
});

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
