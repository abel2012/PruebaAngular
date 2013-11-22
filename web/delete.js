/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app4 = angular.module("app4", []);

app4.controller("deletecontroller", function($scope, $http) {


    //$scope.nombre="Abel";
    $scope.entidadBancaria = null;
    

    $http.get("http://localhost:8084/WebHibernate/entidadBancaria.borrar.json.jsp?idEntidadBancaria=4000").success(function(result) {
        $scope.entidadBancaria = result;

    });

  

});