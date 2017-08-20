<!DOCTYPE html>
<html lang="zh-hant-TW">
<head>
<meta charset="UTF-8">
<title>BACKEND後端</title>
<style>
    body {
        width: 30em;
        margin: 0 auto;
    }
</style>
</head>
<body>
<h1>index.php</h1>
<h3>後端 round(1.3+2.5) = <?php echo round(1.3+2.5); ?></h3>
<h3>前端 round(1.3+2.5) = <span id="demo"></span></h3>
<script>
document.getElementById("demo").innerHTML = Math.round(1.3+2.5);
</script> 
<hr>
<h3>
    <a href="info.php" target="_blank">phpinfo</a> | 
    <a href="backend.php" target="_blank">Backend</a> | 
    <a href="api.php" target="_blank">API</a> | 
    <a href="frontend.html" target="_blank">Frontend</a>
</h3>
</body>
</html>