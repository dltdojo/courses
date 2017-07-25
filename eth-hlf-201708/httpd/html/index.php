<!DOCTYPE html>
<html lang="zh-hant-TW">
<head>
<meta charset="UTF-8">
<title>index</title>
<style>
    body {
        width: 30em;
        margin: 0 auto;
    }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
</head>
<body ng-app="myApp" ng-controller="MyController">
    <div>
<h1>課程資料區</h1>
<h3>ethereum address: {{mydata.ethereum.rinkeby}}</h3>
<h3>
    <a href="ethkey.html" target="_blank">ethkey</a> |
</h3>
        </div>
<hr/>
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

<script>    
angular.module('myApp', [])
    .controller('MyController', function ($scope, $http) {
        $http.get('mydata.json?'+new Date().toString()).then(r=>{
            $scope.mydata = r.data
            console.log($scope.mydata)
        })
    });
</script>
</body>
</html>