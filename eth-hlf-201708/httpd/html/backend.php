<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BACKEND</title>
<style>
    body {
        width: 30em;
        margin: 0 auto;
    }
</style>
</head>
<body>
<h1>後端(backend.php)</h1>
<?php
/*
url, username, passwd,
*/
$connection = new PDO('mysql:host=db;dbname=mydb','root','root');
$statement = $connection->query('select * from mytable');

foreach($statement as $row){
    echo $row['name']." = ".$row['balance']."<br>";
}
?>
</body>
</html>