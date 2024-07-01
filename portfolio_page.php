<?php
    include("include/init.php");
?>
    <html>
        
       <head>

       <title>Portfolio</title>
           <link rel="stylesheet" href = "general.css">
           <link rel="stylesheet" href = "portfolio_page.css">
           <link rel="preconnect" href="https://fonts.googleapis.com">
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
           <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
           <script src="JS/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js"></script>
           <script src="JS/animations.js"></script>
           <script src="JS/portfolio_page.js"></script>

       </head>
        <body> 
        <div class = "navbar">
                    <ul>
                        <li class = "jost" alt = "home icon" id = "homeIconNavbarDiv"><span onclick="transitionToPage('welcome_page.php')"><img src = "images/home_icon.svg"></span></li>
                        <li class = "jost" style = "color: var(--black)">designer, coder, storyteller<span style = "color: var(--orange)">...</span></li>
                        <li style = "color: var(--orange);" class = "jost">work.</span></li>
                        <li class = "jost">contact<span style = "color: var(--orange)">.</span></li>
                    </ul>
                </div>
            <div class = "folderBackgroundDiv">
            <svg width="1133" height="550" viewBox="0 0 1133 550" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="folderBackground">
<path id="Rectangle 17" d="M2.49996 63C2.49996 53.335 10.335 45.5 20 45.5H1113C1122.66 45.5 1130.5 53.335 1130.5 63V530C1130.5 539.665 1122.66 547.5 1113 547.5H20C10.335 547.5 2.5 539.665 2.5 530L2.49996 63Z" stroke="#9CAFFE" stroke-width="5"/>
<path id="Vector 270" d="M37.7732 1.54008L12.9844 46.0401C11.8705 48.0397 13.3162 50.5 15.6052 50.5H215.082C217.327 50.5 218.777 48.1236 217.749 46.127L194.843 1.627C194.329 0.627929 193.3 0 192.176 0H40.394C39.3058 0 38.3028 0.589357 37.7732 1.54008Z" fill="#9CAFFE"/>
<path id="Vector 271" d="M175 15L191 31M191 15L175 31" stroke="#F5F5F5" stroke-width="3"/>
<path id="Vector 272" d="M1124 109H9.49999C7.84314 109 6.5 107.657 6.49999 106L6.49989 62.7132C6.49989 62.5712 6.48875 62.429 6.47265 62.288C5.88715 57.1588 10.6019 52.1022 13.3884 50.3478C13.7814 50.1004 14.2211 49.9997 14.6855 49.9991C377.25 49.4987 1103.61 48.5 1114 48.5C1124 49.7 1126.83 56.6667 1127 60V106C1127 107.657 1125.66 109 1124 109Z" fill="#9CAFFE" stroke="#F5F5F5" stroke-width="3"/>
</g>
</svg>
</div>

</body>
</html>