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

    //set session var user to logged in user, blank if no success
    // if(success) { sessionPHP = `<?php $_SESSION['username']=${clientUsername}?>`}
    // else sessionPHP = "<?php $_SESSION['username'] =''?>";
    // document.body.append(sessionPHP);

    //ajax
    let setSessionUser = (username) => {
        
    }

    // (function($) {
    //     $.fn.setSessionUser = function(username) {
    //         $.ajax({
    //             url: 'php-funcs.php',
    //             type: 'POST',
    //             data: {username: username},
    //             success: function(data) {
    //                 console.log(data);
    //             }
    //         });
    //     }
    // })(jQuery);

    // //setSessionUser(clientUsername);

    // $('')

    //redirect
    //if(success) location.href='homePage.html';
}
