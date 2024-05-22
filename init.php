<?php
    date_default_timezone_set('America/Chicago');
    session_start();

    include('include/connect.php');
		
		// This should happen right after connect.php (config)
		// so other functions have access to the database
    include('include/db_query.php');
		
	
    include('include/common_components.php');
		include('include/posts.php');
    include('include/helper_functions.php');