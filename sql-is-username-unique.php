<?php
    include 'sql-conn.php';

    // Returns a boolean representing if a given username is unique
    $newUsername = $_POST['newUsername'];

    $sqlCommand = "SELECT username
                   FROM Users
                   WHERE username = '$newUsername'";

    $result = mysqli_query($conn, $sqlCommand);

    // If the query returns nothing, then the username does not already exist
    if (mysqli_num_rows($result) < 1) {
        echo true; return;
    }

    echo false;
?>