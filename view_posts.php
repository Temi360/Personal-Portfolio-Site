<?php
    include("init.php");
    echoHeader();

    $postId = $_REQUEST['postId'];

    // All of the posts stored in the DB. We used to call this function and get an array of alll of the posts. Then we had to access the specific array for a specific post like so $allPosts[$_REQUEST['postId']]
    // $allPosts = getAllPosts();

    // The specific post based on the post id sent in the request
    $postInfo = getPost($postId);

    echo(
        "<div class='header-container'>"
    );

    if(isset($postInfo['imagePath'])){
        echo (
            "<img src='".$postInfo['imagePath']."' style='border-radius: 50%'><br>"
            
        );
    }
    echo(
        "<div class='headerone'>"
    );
    if(isset($postInfo['title'])){
        echo (
            "<h1 style='color:#C5D86D;font-size:100px;'>".$postInfo['title']."</h1>"
            
        );
    }
    if(isset($postInfo['author'])&&isset($postInfo['datePosted'])){
        echo (
            "<p><strong>".$postInfo['datePosted']."</strong> | ".$postInfo['author']."</p>"
            
        );
    }
    echo(
        "</div>"
    );
    echo(
        "</div>"
    );
    if(isset($postInfo['content'])){
        echo (
            "<p>".$postInfo['content']."</p>"
            
        );
    }
    echo(
        "<div><h3>Comments</h3></div>"
    )
?>