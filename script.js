var app = angular.module('myModule', []);

app.controller('myController', function($scope) {
    
 $scope.toDoList = []; 
    
    $scope.addTask = function(newTask) {
        
        console.log(newTask);
        
    };
    
    
    
    
    
    
});