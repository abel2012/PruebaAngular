/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app3 = angular.module("app3", []);

app3.controller("readcontroller", function($scope, $http) {


    //$scope.nombre="Abel";
  
    $scope.entidadesBancarias = [];


    $http.get("http://localhost:8084/WebHibernate/entidadesBancarias.json.jsp?nombre=abel").success(function(result) {
        $scope.entidadesBancarias = result;

    });

});


