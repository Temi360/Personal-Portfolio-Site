<?php
  include("init.php");
  echoHeader();
  
?>
<html>
    <div class="header-container"><h1>Sign Up!</h1></div>
    <div class="signForm">
            <form onsubmit = "insertDatabase($_REQUEST['firstName'],$_REQUEST['lastName']$_REQUEST['email'],$_REQUEST['password'])" action="index.php" method="POST">
                <div class="form-group">
                     <label for="firstName"><h4>First Name</h4></label>
                     <input type="text"  id="firstName" name="firstName" required>
                     <label for="lastName"><h4>Last Name</h4></label>
                     <input type="text"  id="lastName" name="lastName" required>
                     <label for="email"><h4>Email</h4></label>
                     <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password"><h4>Password</h4></label>
                    <input type="password" id="password" name="password" required>
                    <label for="confirmPassword"><h4>Confirm Password</h4></label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn">Sign Up</button>
            </form>
    </div>
<?php 
    // if(isset($_REQUEST['email'])&&isset($_REQUEST['password'])isset($_REQUEST['firstName'])isset($_REQUEST['lastName'])){
    //     insertDatabase($_REQUEST['email'],$_REQUEST['password']);
    //     // header("Location:index.php?");
    //     // exit;
        // }

    // if ()
   
