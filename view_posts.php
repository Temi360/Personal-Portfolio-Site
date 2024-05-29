<?php
    include("init.php");
    echoHeader();
    
    $postId = $_REQUEST['postId'];

    // All of the posts stored in the DB. We used to call this function and get an array of alll of the posts. Then we had to access the specific array for a specific post like so $allPosts[$_REQUEST['postId']]
    // $allPosts = getAllPosts();

    // The specific post based on the post id sent in the request
    $postInfo = getPost($postId);
    $commentInfo = getAllCommentsForAPost($postId);
    // debugOutput($postInfo);
    echo(
        "<div class='header-container'>"
    );

    if(isset($postInfo['imagePath'])){
        echo (
            "<img class='blogPostImages'src='".$postInfo['imagePath']."'><br>"
            
        );
    }
    echo(
        "<div class='headerone'>"
    );
    if(isset($postInfo['title'])){
        echo (
            "<h1 style='color:#C5D86D;font-size:100px; padding-left:30px;'>".$postInfo['title']."</h1>"
            
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
            "<p style='padding:30px;'>".$postInfo['content']."</p>"
            
        );
    }
    echo (
        "<h2>Comments</h2>"
    );
    ?>
<!-- adding a comment -->
<div class='addComment-container'>
    <form action='' method='post'>
       <label for="commentName"><h4>Username or email:</h4></label><input type='text' name='commentName' id='commentName'/><br></br>
            <input type='text' name='commentContent' id='commentContent'height='50px' width='30px'/>
            <!-- hidden scroll input field -->
            <input type='submit' class='Button' value= 'Add Comment'> 
    </form>
</div>  

<?php
// If we read directly from the request instead of passing variables  
function saveThisComment($content, $author, $postId){
    $now = date_create('now');
    $datePosted= date_format($now, 'Y-m-d');

    dbQuery("
        INSERT INTO comments( postId, datePosted, author, content)
        VALUES(:postId, :datePosted, :author, :content)
    ",
    [
        "content" => $content,
        "datePosted" => $datePosted,
        "author" => $author,
        "postId" => $postId, 
    ]
    );
}
if(isset($_REQUEST['commentName'])&&isset($_REQUEST['commentContent'])){
    if(empty($_REQUEST['commentName'])){
        echo ("Fill name now");
        exit;
    }
    else if(empty($_REQUEST['commentContent'])){
        echo ("no, stupid, content now!");
        exit;
    }
    else {
        saveThisComment($_REQUEST['commentContent'],$_REQUEST['commentName'],$postId);
        
        header("Location:view_posts.php?postId=".$postId);
        // echo "<script>window.scrollTo(0, ". (int)$_GET['scrollPosition'] ." );</script>";
        exit;
    }
}
    foreach($commentInfo as $comment){
        echo(
            "
                    <div class='blogComment-container'>
                        <img class='commentImageIds'src=".$comment['imagePath'].">
                        <p style='margin:10px;'>".$comment['author']." | <strong>".$comment['datePosted']."</strong></p>
                        <p style='margin:30px;'>".$comment['content']."</p>
                        
                    </div>"
        );
    }
        
    
    
