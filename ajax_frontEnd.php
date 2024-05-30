<html>
    <head>
    <link rel='stylesheet' href='style.css'>
    <script>
        function getCurrentTime(){
            
            fetch('ajax_endpoint.php').then(
                response => response.text()//response.text is what's gettomg returned out of response
            ).then(
                theStuff => document.getElementById('dateTimeSection').innerHTML = theStuff                
            );
        }
    </script>
    </head>
    <body>
        <input type='button' value='get time' onclick='getCurrentTime()'/>

        <p id='dateTimeSection' style="color: purple"></p>
</html>