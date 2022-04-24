<?php
    include 'sql-conn.php';

    // Returns the roles of a username and password pair as an array of bools
    // If nothing is returned, the credentials were wrong and an empty array is returned
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sqlCommand = "SELECT administrator, adopter, foster
                   FROM Users
                   WHERE username = '$username' AND password = '$password'";

    $result = mysqli_query($conn, $sqlCommand);

    // If the query returns nothing, then the username and password pair does not exist
    if (mysqli_num_rows($result) < 1) {
        return [];
    }


    return array('isAdmin' => mysqli_fetch_row($result)[0],
               'isAdopter' => mysqli_fetch_row($result)[1],
               'isFoster' => mysqli_fetch_row($result)[2]);
?>