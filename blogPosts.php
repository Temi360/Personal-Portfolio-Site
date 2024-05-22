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
        <br></br>
            <?php
                echo (" <div class='all_post-container'>");
                foreach($allPosts as $post){
                    echo ("
                        <a href=view_posts.php?postId=".$post['postId']."><div class='post-container'>
                            <p><strong>".$post['datePosted']."</strong></p>
                            <h4>".$post['title']."</h4>
                        </div></a>
                    ");
                }
                echo ("</div>");
                ?>
        </div>
        </div>
    </body>

</html>