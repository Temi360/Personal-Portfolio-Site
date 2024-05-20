<?php   
//chess

$blackSquare="<img style='height:100px;width:100px;border:.3px solid black'src='blacksquare.png'>";

$whiteSquare= "<img style='height:100px;width:100px;border:.3px solid black' src='whitesquare.jpg'>";

// nested for loop
for($i=1;$i<8;$i++){
    for($j=1;$j<8;$j++){
        //for even rows
        if ($i%2==0){
            //checks if column is even or odd
            //even column
            if($j%2==0){
                echo (
                    $whiteSquare
                );
            }
            //odd column
            else{
                echo(
                    $blackSquare
                );
            }
        }
        //for odd rows
        else{
            if($j%2!=0){
                echo (
                    $whiteSquare
                );
            }
            else{
                echo(
                    $blackSquare
                );
            }

        }
    }
     // line break
     echo("</br>");
}
// board game 
//people array
$people = [
[
    'Name'=>'Temi',
],
[
    'Name'=>'Jake',
],
[
    'Name'=>'GirlyPop',
],
];


?>

