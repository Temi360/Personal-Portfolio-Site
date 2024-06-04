     <link rel='stylesheet' href='style.css'>

    <!-- <a onclick = 'ShowHiddenText()'>Javascript</a>
    <p class='hiddenJsButton'>it says something</p>
    <p class='hiddenJsButton'>it says something</p> -->


    <script>
    // function ShowHiddenText(){
    // // console.log('hi');
    // var firstHiddenButton = document.getElementsByClassName("hiddenJsButton")[0];
    // var listOfClassesAppliedToButton = firstHiddenButton.classList;
    // if (listOfClassesAppliedToButton.contains("visibleJsButton")){
    //     firstHiddenButton.classList.remove("visibleJsButton");
    // }
    // else{
    //     firstHiddenButton.classList.add("visibleJsButton");
    // }

    // }
    function showComments(){
      for(let i = 0;i< document.getElementsByClassName("blogComment-container").length; i++){
        var hiddenCommentDiv = document.getElementsByClassName("blogComment-container")[i];
        var downArrow = document.getElementsByClassName("downArrow")[0];
        var commentText = document.getElementById("showCommentText");
        var listofClassesAppliedToComments =  hiddenCommentDiv.classList;
        if (listofClassesAppliedToComments.contains("blogComment-containerOpen")){
                hiddenCommentDiv.classList.remove("blogComment-containerOpen");
                downArrow.classList.remove("upArrow");
                commentText.innerHTML = "Show Comments"

        }
        else{
                hiddenCommentDiv.classList.add("blogComment-containerOpen");
                downArrow.classList.add("upArrow");
                commentText.innerHTML = "Hide Comments"


        }
      }
      
    }
    function showSignIn(){
        console.log("signin");
        var hiddenSignInDiv = document.getElementsByClassName("signIn-container")[0];
        var listofClassesAppliedToSignIn = hiddenSignInDiv.classList;
        if (listofClassesAppliedToSignIn.contains("signIn-containerOpen")){
            hiddenSignInDiv.classList.remove("signIn-containerOpen");
        }
        else{
            hiddenSignInDiv.classList.add("signIn-containerOpen");

        }

    }
    </script>

