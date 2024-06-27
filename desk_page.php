<?php
    include('include/init.php');
?>
    <html>  
        <head>
        <title>Welcome</title>
        <link rel="stylesheet" href = "general.css">
        <link rel="stylesheet" href = "desk_page.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
        <script src="JS/animations.js"></script>
        <script src="JS/desk_page.js"></script>
        </head>

        <body> 
            <div class = "custom-cursor">
                
                <div class = "navbar">
                    <ul>
                        <li alt = "home icon" id = "homeIconNavbarDiv"> <a href ="welcome_page.php" ><img src = "images/home_icon.svg"></a></li>
                        <li class = "jost" style = "color: var(--black)">designer, coder, storyteller<span style = "color: var(--orange)">...</span></li>
                        <a href = "computer_page.php"><li class = "jost">work<span style = "color: var(--orange)">.</span></li></a>
                        <li class = "jost">contact<span style = "color: var(--orange)">.</span></li>
                    </ul>
                </div>

                <div class = "deskBackground">
                <object id = "deskElements" width ="700" height ="633.87" type="image/svg+xml" data="deskElements.svg"></object>
                </div>
            </div>
        </body>
    </html>
    