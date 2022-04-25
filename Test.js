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