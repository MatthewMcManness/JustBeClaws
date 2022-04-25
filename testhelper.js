fetch('http://localhost:3000/login', {
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