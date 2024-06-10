<?php
    include('include/init.php');
?>
    <html>
        
        <head>
        <title>Welcome</title>
        <link rel='stylesheet' href='style(1).css'>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        </head>
        <body style = 'background-color: var(--black)'> 
        <!-- <body> -->
            <div class = 'navbar'>
                <ul>
                    <li  alt = 'home icon' id = 'homeIconNavbarDiv'><a href = 'welcome_page.php'><img src = 'images/home_icon(welcome_page).svg'></a></li>
                    <li class = 'jost'>designer, artist, storyteller<span style = 'color: var(--orange)'>...</span></li>
                    <li class = 'jost'>work<span style = 'color: var(--orange)'>.</span></li>
                    <li class = 'jost'>contact<span style = 'color: var(--orange)'>.</span></li>
                </ul>
            </div>
            <div class = 'WelcomePageNameAndIcon'>
                <img id = 'welcomePageName' src = 'images/TEMI.svg'>
                <a href = 'loading_page.php'><img alt = 'clickable button that goes to the next page' id = 'welcomePageIconClick' src = 'images/welcome_page_iconClick.svg'></a>
            </div>
            <img id = 'clickMe' src = 'images/click_me.svg'>

            

    </html>