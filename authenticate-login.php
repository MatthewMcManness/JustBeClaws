<?php
    include 'dbh.php';
?>

<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

        $sql = "SELECT username
                FROM [Users]
                WHERE username = $username AND password = $password"

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