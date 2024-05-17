<?php
    include("include/connect.php");
    include("include/db_query.php");
    $result = dbQuery("SHOW TABLES")->fetchAll();
    var_dump($result);