<?php
    include("init.php");
    include("signIn.php");
    echoHeader();
    
?>


<html>
    <body>
        <div class="header-container">
           <div class="header1"><h1>This<br><span>is Temi!</span></h1>
           <p style="color:#8A9946; margin-top:100px; margin-bottom:50px"> Welcome to my very cool, fun world. Feel free to look around,<br> sus out the vibes,and have a good time. I promise I don't bite.</p>
           <!-- <a href="#aboutMe"><button>Wanna Learn More?</button></a> -->
           <a href="blogPosts.php"><button>Read my Blog!</button></a>
           <a onclick = 'showSignIn()'><button style = 'margin-left:20px;'>Sign In</button></a>
        </div>
            <div class="header2"><img id="turtle"alt="turtleimage"src="turtle.gif"></div>
        </div>
        <!-- Sign in form -->
        <div class="signIn-container">
            <h2>Sign In</h2>
            <form action=" " method="POST">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn">Sign In</button>
            </form>
            <a href="sign_up.php" class="link"><button>Sign Up for An Account</button></a>
            <!-- <a href="#" class="link"><button>Sign Out</button></a> -->
        </div>
<?php
        if(isset($_REQUEST['email'])&&isset($_REQUEST['password'])){
            if(empty($_REQUEST['email'])){
                echo ("Please enter an email address");
            }
            else if(empty($_REQUEST['password'])){
                echo ("Please enter a password");

            }
            else {
            checkDatabase($_REQUEST['email'],$_REQUEST['password']);
            header("Location:index.php?");
            exit;
            }
        }
    // }
     echoFooter();
?>   

