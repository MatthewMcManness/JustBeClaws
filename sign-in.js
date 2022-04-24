
//placeholder vars
let placeholderUsers = [
    {username: 'admin', password: 'password'},
    {username: 'adopter', password: 'password'},
    {username: 'foster', password: 'password'},
    {username: 'user', password: 'password'}
];

//vars
let clientUsername = '';
let clientPassword = '';
let sessionPHP = '';

//event listener
if(document.getElementById('sign-in-btn')) {
    document.getElementById('sign-in-btn').addEventListener('click', (event) => {
        event.preventDefault();
        signIn();
    });
}


//SIGN IN
const signIn = () => {
    let success = false;

    //get value of fields
    clientUsername = document.getElementById('username').value;
    clientPassword = document.getElementById('password').value;

    //clear fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';


    //query database and see if login is correct

    attemptLogin(clientUsername,clientPassword);
    console.log("helle");

    //placeholder
    placeholderUsers.forEach(user => {
        if(clientUsername == user.username && clientPassword == user.password) {
            success = true;
            console.log("SUCCESS");
        }
    });
   

    //if incorrect print error message
    if(!success) {
        document.getElementById('failed-login').style.display='block'; 
        clientUsername ="";
    }
}

const attemptLogin = async (client_username,client_password) => {
    let data = {
        username: client_username,
        password: client_password
    }

    console.log('this data: ',data);

    console.log('stringify: ',JSON.stringify(data));

    await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(data)
    });
}