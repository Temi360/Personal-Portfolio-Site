<?php
include("init.php");

echoHeader();

echo(
    "<br><br>"
);
//back button
// calls get post function
$postinfo = getPost($_REQUEST["postId"]);
echo(
    "<div class='header-container'>"
);
if(isset($postinfo['Image'])){
    echo (
        "<img style='height=200px;width=200px;margin:40px;'src='".$postinfo['Image']."'<br>"
        
    );
}
echo(
    "<div class='headerone'>"
);
echo(
    "<a href='blogPosts.php'><img class='backButton'src='back.png'></a>"
);
if(isset($postinfo['Title'])){
    echo (
        "<h1 style='color:#C5D86D;font-size:100px;'>".$postinfo['Title']."</h1>"
        
    );
}
if(isset($postinfo['Author'])&&isset($postinfo['DateCreated'])){
    echo (
        "<p><strong>".$postinfo['DateCreated']."</strong> | ".$postinfo['Author']."</p>"
        
    );
}
echo(
    "</div>"
);
echo(
    "</div>"
);
if(isset($postinfo['Body'])){
    echo (
        "<div class='blogText-container'>
            <p>".$postinfo['Body']."</p>
        </div>"
        
    );
}
?>