<?php
include("init.php");

echoHeader();

echo(
    "<br></br>"
);
//back button
echo(
    "<a href='blogPosts.php'><img class='backButton'src='back.png'</a>"
);
// calls get post function
$postinfo = getPost($_REQUEST["postId"]);

if(isset($postinfo['Title'])){
    echo (
        "<h2 style='color:#C5D86D;'>".$postinfo['Title']."</h2>"
        
    );
}
if(isset($postinfo['Author'])&&isset($postinfo['DateCreated'])){
    echo (
        "<p><strong>".$postinfo['DateCreated']."</strong> | ".$postinfo['Author']."</p>"
        
    );
}

if(isset($postinfo['Image'])){
    echo (
        "<img style='height=200px;width=200px;'src='".$postinfo['Image']."'<br>"
        
    );
}
if(isset($postinfo['Body'])){
    echo (
        "<p>".$postinfo['Body']."</p>"
        
    );
}
?>