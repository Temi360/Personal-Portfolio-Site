<?php
//Use the values from config.php to make a connection to the database. Since this
//isn't in a function, it will happen automatically right now, but you could
//easily wrap it in a function if you want to control when the db connection is
//initiated.
$dsn = "mysql:host=".DB_HOSTNAME.";dbname=".DB_DATABASE.";charset=utf8";
$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
);
$pdo = new PDO($dsn, DB_USERNAME, DB_PASSWORD, $opt);
//Note this is a homemade function that wraps around the default PHP/MySQL PDO
//to make it a bit easier to make database calls. It assumes there's only one database
//connection
//Note: $query should follow the format `...Email = :Email...` and then $values
//should be array('Email'=>'test@fake.com')
//read this for help with PDOs: https://phpdelusions.net/pdo
//Other note: if we need to specify the data type, check this out: http://php.net/manual/en/pdostatement.bindvalue.php
function dbQuery($query, $values=array()){
    global $pdo;
    //
    $stmt = $pdo->prepare($query);
    $stmt->execute($values);
    return $stmt; //To get data out, use ->fetch() for one row or ->fetchAll() for all rows
}

