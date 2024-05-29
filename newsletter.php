<?php
    include('init.php');
    // echoHeader('newsletter');

    debugOutput($_REQUEST);
?>

    <div class='addComment-container'>
        <form action='' method='post'>
            <label for="commentName">Username or email: </label><input type='text' name='commentName' id='commentName'/><br></br>
            Add a comment: <input type='text' name='commentContent' height='50px' width='30px'/>
            <input type='submit' class='Button'/>
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
            saveThisComment($_REQUEST['commentContent'],$_REQUEST['commentName'],$_REQUEST['postId'] );
            header("Location:newsletter.php?postId=1");
            exit;
        }
    }