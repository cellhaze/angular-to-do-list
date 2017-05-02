var app = angular.module('myModule', []);

app.controller('myController', function($scope) {
    
 $scope.toDoList = []; 
    
    $scope.addTask = function(newTask) {
        
//        console.log(newTask);
        $scope.toDoList.push({ task: newTask });
        
        console.log($scope.toDoList);
        
    };

$scope.removeItem = function(i) {
    $scope.toDoList.splice(i, 1);
}; 
    
    
    
    
    
});