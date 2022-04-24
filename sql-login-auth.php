<?php
    include 'sql-conn.php';

    // Returns the roles of a username and password pair as an array of bools
    // If nothing is returned, the credentials were wrong and an empty array is returned
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sqlCommand1 = "SELECT administrator, adopter, foster
                    FROM Users
                    WHERE username = '$username' AND password = '$password'";

    $result1 = mysqli_query($conn, $sqlCommand1);

    // If the query returns nothing, then the username and password pair does not exist
    if (mysqli_num_rows($result1) < 1) return [];

    // Set the logged_in field to 1 for the user
    $sqlCommand2 = "UPDATE Users
                    SET logged_in = 1
                    WHERE username = '$username'";

    mysqli_query($conn, $sqlCommand2);

    // Roles of the user are passed to the client
    return array('isAdmin' => mysqli_fetch_row($result)[0],
               'isAdopter' => mysqli_fetch_row($result)[1],
               'isFoster' => mysqli_fetch_row($result)[2]);
?>