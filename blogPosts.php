<?php
    include("init.php");
    echoHeader();
    $allPosts = getAllPosts();
?>
<html>
        <div class="header-container">
            <h1>Daily Blog</h1>
        </div>
        <h3 style="text-align:center;color:#8A9946">Read all my weird thoughts here (:</h3>
        <!-- TO DO: Implement Filter By Function -->
        <!-- <p>Filter By</filter> -->
        <br></br>
            <?php
                echo (" <div class='all_post-container'>");
                foreach($allPosts as $post){
                    echo ("
                    <a href=view_posts.php?postId=".$post['postId'].">
                        <div class='post-container'>
                            <img src =".$post['imagePath'].">
                                <p><strong>".$post['datePosted']."</strong> | ".$post['author']."</p>
                                <h4><strong>".$post['title']."</strong></h4>
                        </div></a>
                    ");
                }
                echo ("</div>");
                ?>
        </div>
        </div>
    </body>

</html>