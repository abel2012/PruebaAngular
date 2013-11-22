/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("app", []);

app.controller("indexcontroller", function($scope, $http) {


    //$scope.nombre="Abel";
    $scope.idEntidad = null;
    $scope.entidadBancaria = null;
     
    $scope.entidadBancaria = null;

    $http.get("http://localhost:8084/WebHibernate/entidadBancaria.json.jsp?idEntidadBancaria=4000").success(function(result) {
        $scope.entidadBancaria = result;

    });

$scope.delete = function() {
    $http.get("http://localhost:8084/WebHibernate/entidadBancaria.borrar.json.jsp?idEntidadBancaria=4000").success(function(result) {
        $scope.entidadBancaria = result;

    });
};
  

});
