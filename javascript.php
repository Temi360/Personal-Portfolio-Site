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
        var listofClassesAppliedToComments =  hiddenCommentDiv.classList;
        if (listofClassesAppliedToComments.contains("blogComment-containerOpen")){
                hiddenCommentDiv.classList.remove("blogComment-containerOpen");
        }
        else{
                hiddenCommentDiv.classList.add("blogComment-containerOpen");
        }
      }
    //   flip arrow
      var downArrow = document.getElementsByClassName("downArrow")[0];
      var listofClassesAppliedToDownArrow =  downArrow.classList;
      if (listofClassesAppliedToDownArrow.contains("upArrow")){
                downArrow.classList.remove("upArrow");
        }
        else{
                downArrow.classList.add("upArrow");
        }

    }
    </script>

