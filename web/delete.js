/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app4 = angular.module("app4", []);

app4.controller("deletecontroller", function($scope, $http) {


    //$scope.nombre="Abel";
     $scope.idEntidad = null;
    $scope.entidadBancaria = null;
    $scope.entidadBancaria2 = null;
    

    $http.get("http://localhost:8084/WebHibernate/entidadBancaria.json.jsp?idEntidadBancaria=4000").success(function(result) {
        $scope.entidadBancaria = result;

    });

$scope.delete = function() {
    $http.get("http://localhost:8084/WebHibernate/entidadBancaria.borrar.json.jsp?idEntidadBancaria=4000").success(function(result) {
        $scope.entidadBancaria2 = result;

    });
};
  

});