/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module("app",[]);

app.controller("indexcontroller",function($scope,$http){
    
    
    //$scope.nombre="Abel";
     $scope.EntidadBancaria;

    $http.get("http://localhost:8084/Prueba/entidadBancaria.json.jsp",function(result) {
        $scope.EntidadBancaria=result;
      
    });
    
});
