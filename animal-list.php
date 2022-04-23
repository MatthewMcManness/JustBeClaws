<?php
    include 'dbh.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JustBeClaws</title>
        <link rel="icon" href="justBeClawsIcon.png">
        <link rel="stylesheet" href="style.css" type="text/css">
        <script src="customElements.js" type="text/javascript" language="javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
        <script>
            //jquery code here
        </script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    </head>

    
    <!-- <div id="comments">
        <?php
            $sql = "SELECT TOP 1
                        username
                    FROM Users";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysql_fetch_arroc($result)) {
                    echo "Username found!";
                }
            } else {
                echo "Username not found!";
            }
        ?>
    </div> -->
    
    <header>
        <script>
            activePage="animals";
            function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
        </script>
       <site-header></site-header>
    </header>
    
    <body>
        <div class="content-emphasis">
            <h1>Cats</h1>

            <div class="cardGrid">
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="Cat.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="ruby.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="jack.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="kitten.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="litter.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="Cat.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
                <div class="card" onclick="location.href='animal-admin.html';">
                    <img src="Cat.jpg" alt="Avatar" class="cardPicture">
                    <h3>Cat Name</h3>
                </div>
            </div>
        </div>

        <a class="adoptbutton" href="#modal1">Add Cat</a>

        <div class="popup" id="modal1">
            <a class="popup__overlay" href="#"></a>
            <div class="popup__wrapper">
                <a class="popup__close" href="#">X</a>
                <div class="modal-header">
                    <h2 class="Modal">Add a Cat</h2>
                </div>
                <div class="modal-body">
                    <p>Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here">
                </div>
                <div class="modal-body">
                    <p>birthdate:</p> <input type="date">
                </div>
                <div class="modal-body">
                    <p>Breed:</p> <select name="breed" id="breed">
                        <option value="1">Domestic Shorthair</option>
                        <option value="2">Domestic Longhair</option>
                        </select>  
                </div>
                <div class="modal-footer">
                    <input type="button" value="Submit">
                </div>
                    </div>
                </div>

                
    </body>
</html>