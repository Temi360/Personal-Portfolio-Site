<?php
    include("init.php");
    echoHeader();
    
?>
<html>
        <div class="header-container">
            <h1>Daily Blog</h1>
        </div>
        <h3 style="text-align:center;color:#8A9946">Read all my weird thoughts here (:</h3>
        <br></br>
            <?php
                // include("posts.php");
                $AllPosts = getAllPosts();
                echo (" <div class='all_post-container'>");
                foreach(getAllPosts() as $post){
                    echo ("
                        <a href=view_posts.php?postId=".$post['Id']."><div class='post-container'>
                            <img src=".$post['Image'].">
                            <p><strong>".$post['DateCreated']."</strong></p>
                            <h4>".$post['Title']."</h4>
                        </div></a>
                    ");
                }
                echo ("</div>");
                ?>
               <!--post divs-->
        <!-- <div class="all_post-container"> -->
            <!-- <div class="post-container">
            <img id="leaf"src="leaf.png">
            <div class="postone"><a href="view_posts.php?postId=1"><h4>1st day of real job</h4></div>
            <div class="posttwo"><p class="meta">Posted on January 1, 2024 by Temi Ijisesan</p></div>
            <div class="postthree"><p>woke up, ate, drove car. successs!</p></div>
            <div class="postfour"><a href="#" class="read-more">Read more...</a></div>
        </div> -->

        </div>
        </div>
    </body>

</html>