<?php
    // $user = $_REQUEST['email'];
    // $password = $_REQUEST['password'];
    function echoHeader($pageTitle = ""){
        session_start();
    //username
    // global $user;
        echo ("
    <html>
    <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>All About Temi</title>
    <!-- external stylesheet links -->
    <link rel='stylesheet' href='style.css'>
    <style>
        @import url('https://use.typekit.net/agw6ozp.css');
      </style>
    </head>
    <!-- nav bar -->
    <div class='navbar'>
        <ul>
            <li><a href='index.php'><h2 id='temiIcon'>Temi</h2></a></li>
            <li><a href='blogPosts.php'>BLOG</a></li>
            <li><a href='photos.php'>PHOTO ALBUM</a></li>
            <div class='social-icons'>
                <a target='_blank'href='https://www.linkedin.com/in/temi-ijisesan-692829257/'><img src='linkedin2.png' alt='LinkedIn' height='30' width='30'></a>
                <a target='_blank'href='https://www.instagram.com/the_dawn_of_art/'><img src='instagram.png' alt='Instagram' height='30' width='30'></a>
            </div>
            <div id= 'userProfile'>
                <p class='userName'>Hi, ".$_SESSION['firstName']." </p>
                <img class = 'profileImage' src = '". $_SESSION['profileImage']."'>
            </div>
        </ul>
    </div>");
    }
    function echoFooter($pageTitle = ""){
        echo ("
              </body>
            </html>
        ");
    }
