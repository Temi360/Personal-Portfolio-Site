<?php
include("init.php");

echoHeader();

// calls get post function
$postinfo = getPost($_REQUEST["postId"]);

if(isset($postinfo['DateCreated'])){
    echo (
        "<p style='margin-top:100px;'>".$postinfo['DateCreated']."</p>"
        
    );
}
if(isset($postinfo['Title'])){
    echo (
        "<h2>".$postinfo['Title']."</h2>"
        
    );
}
if(isset($postinfo['Author'])){
    echo (
        "<p>".$postinfo['Author']."</p>"
        
    );
}

if(isset($postinfo['Body'])){
    echo (
        "<p>".$postinfo['Body']."</p>"
        
    );
}
?>