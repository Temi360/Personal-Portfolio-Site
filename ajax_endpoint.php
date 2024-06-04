<?php
    include('init.php');
    // $theData = date('Y-m-d H:i:s');
    // echo $theData;
 
    // $now = date_create('now');
    // $datePosted= date_format($now, 'Y-m-d');

    echo  saveThisComment();
    // echo $datePosted;
        // dbQuery("
        //     INSERT INTO comments( postId, datePosted, author, content)
        //     VALUES(:postId, :datePosted, :author, :content)
        // ",
        // [
        //     "content" => $content,
        //     "datePosted" => $datePosted,
        //     "author" => $author,
        //     "postId" => $postId, 
        // ]
        // );
        // echo ("
        //     <div id='showComments'>
        //     <h4 id = 'showCommentText'>Show Comments</h4><a onclick = 'showComments()'><img style = 'margin-top:0px;'class='downArrow' src='downArrow.svg'></a>
        //     </div>
        //     ");
        //     foreach($commentInfo as $comment){
        //         echo(
        //             "
        //                     <div class='blogComment-container'>
        //                         <img class='commentImageIds'src=".$comment['imagePath'].">
        //                         <p style='margin:10px;'>".$comment['author']." | <strong>".$comment['datePosted']."</strong></p>
        //                         <p style='margin:30px;'>".$comment['content']."</p>
                                
        //                     </div>"
        //         );
        //      }
            