<?php
    include 'sql-conn.php';

    $conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

    $username1 = 'john';
    $password1 = 'spmith';

    $sqlCommand = "SELECT username
                   FROM Users
                   WHERE username = '$username1' AND password = '$password1'";

        $result = mysqli_query($conn, $sqlCommand);
        
        if (mysqli_num_rows($result) > 0) {
            $authenticated = true;
        } else $authenticated = false;
        $authenticated = mysqli_num_rows($result) > 0;

        echo ($authenticated) ? "Login authenticated" : "Login not authenticated";


    //$username = $_POST['username'];
    //$password = $_POST['password'];
    $username = 'john';
    $passworkd = 'smith';

        $sqlCommand = "SELECT username
                       FROM Users
                       WHERE username = $username AND password = $password";

        $result = mysqli_query($conn, $sql);
        $authenticated = mysqli_num_rows($result) > 0;

        //if (mysqli_num_rows($result) > 0)
        //$authenticated = mysqli_num_rows($result);

        /*
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysql_fetch_arroc($result)) {
                echo "Username found!";
            }
        } else {
            echo "Username not found!";
        }
        */
?>