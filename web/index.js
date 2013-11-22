/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module("app",[]);

app.controller("indexcontroller",function($scope,$http){
    
    
    //$scope.nombre="Abel";
     $scope.entidadBancaria=null;

    $http.get("http://localhost:8084/Prueba/entidadBancaria.json.jsp?idEntidadBancaria=4",function(result) {
        alert("hola caracola");
        $scope.entidadBancaria=result;
      
    });
    
});
