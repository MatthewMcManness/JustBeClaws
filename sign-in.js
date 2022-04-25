let loggedIn = false;


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

    //get value of fields
    clientUsername = document.getElementById('username').value;
    clientPassword = document.getElementById('password').value;

    //clear fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';


    //attempt to login
    attemptLogin(clientUsername,clientPassword);
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
    })
        .then(response => response.json())
        .then(data=>{
            loggedIn=data.success
            //if incorrect print error message
            if(!loggedIn) {
                document.getElementById('failed-login').style.display='block'; 
                clientUsername ="";
            } else { //redirect
                location.href ='/';
            }
        });
    
    console.log('test', loggedIn);
}