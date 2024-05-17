<?php
   $inputOne = 123;
   $inputTwo = 123; 

   $comparison= "";

    if($inputOne<$inputTwo){
        $comparison= "less than";
    }
    else if($inputOne>$inputTwo){
        $comparison= "greater than";
    }
    else{
        $comparison= "equal to";
    }

    echo(
        " The number ".$inputOne." is ".$comparison." to ".$inputTwo.
    );
?>

