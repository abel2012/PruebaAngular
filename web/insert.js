/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app2 = angular.module("app2", []);

app2.controller("insertcontroller", function($scope, $http) {


    //$scope.nombre="Abel";
    $scope.entidadBancaria = null;
    $scope.entidadesBancarias = [];

    $http.get("http://localhost:8084/WebHibernate/entidadBancaria.json.jsp?idEntidadBancaria=4").success(function(result) {
        $scope.entidadBancaria = result;

    });

$http.get("http://localhost:8084/WebHibernate/entidadesBancarias.json.jsp?nombre=abel").success(function(result) {
        $scope.entidadesBancarias = result;

    });

});
