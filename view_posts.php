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
//back button
echo(
    "<img id='backButton'class='postDirectionButton'src='back.png'>"
);
//forward button 
echo(
    "<img id='forwardButton'class='postDirectionButton'src='back.png'>"
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
<!-- <script>
let forwardButton = document.getElementById("forwardButton");
function postGallery(){
    //if statement to make sure id isn;t last post
    if ($postinfo['Id']<count($getAllPosts())){
        //change post id to next one 
        $postinfo = getPost($_REQUEST["postId +1"]);
    }
}
//click listener 
forwardButton.addEventListener("click", postGallery);
</script> -->