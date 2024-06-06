<?php  
    include('init.php');
    session_start();

    $user = checkDatabase();
    echo ('
        Hello and welcome'.$_SESSION['firstName'].
        ');