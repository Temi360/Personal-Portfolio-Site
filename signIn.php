<?php
    // <!-- User sign in -->
    
    function checkDatabase($email, $password){
        $isUser = dbQuery ("
        SELECT * 
        FROM users
        WHERE email = :email;
        ",
        [
            "email" => $email,
        ]
        )->fetchAll();
        $isPassword = dbQuery ("
        SELECT * 
        FROM users
        WHERE password = :password;
        ",
        [
            "password" => $password,
        ]
        )->fetchAll();
        if($isUser!=null&&$isPassword!=null){
            echo("You are Signed In");
            $userId = dbQuery ("
            SELECT userId
            FROM users 
            WHERE email = :email;
            ",
            [
                "email" => $email,

            ]
            )->fetchColumn();
            $firstName = dbQuery ("
            SELECT firstName
            FROM users 
            WHERE email = :email;
            ",
            [
                "email" => $email,

            ]
            )->fetchColumn();
            $profileImage = dbQuery ("
            SELECT profileImage
            FROM users 
            WHERE email = :email;
            ",
            [
                "email" => $email,

            ]
            )->fetchColumn();
            // start session if user is signed in
            // session_start();
            // echo($userId);
            $_SESSION['userId'] = $userId;
            $_SESSION['firstName'] = $firstName;
            $_SESSION['profileImage'] = $profileImage;
            debugOutput($_SESSION['firstName']);

        }
        else{
            echo("You're not yet registered.");
        
        }

    //    debugOutput($isUser);
    //    debugOutput($isPassword);
    //     // if ($isUser)
    return $isUser;
    // checks if there is an ongoing session or not
        // if (isset($_SESSION['user'])){
        //     echo ("You're already logged in");
        // }
        // else{
        //     if(isset($_REQUEST['email'])&&isset($_REQUEST['password'])){
        //         if(empty($_REQUEST['email'])){
        //             echo ("Please enter an email address");
        //         }
        //         else if(empty($_REQUEST['password'])){
        //             echo ("Please enter a password");

        //         }
        //         else {
        //         checkDatabase($_REQUEST['email'],$_REQUEST['password']);
        //         // header("Location:index.php?");
        //         // exit;
        //         }
        //     }
        // }
    }
    // TO DO: HASH PASSWORDS
    function insertDatabase ($firstName,$lastName,$email,$password)
    {
        $user = dbQuery("
        INSERT 
        INTO users (firstName, lastName, email, password) 
        VALUES (:firstName , :lastName, :email, :password),
        ",
        [
            "firstName" => $firstName,
            "lastName" => $lastName,
            "email" => $email,
            "password" => $password,

        ]
        );
    }

    echoFooter();