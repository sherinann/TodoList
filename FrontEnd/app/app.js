'use strict';

// Declare app level module which depends on views, and components
angular.module('toDoList', [
  'ngRoute',
  'toDoList.tasks',
  'toDoList.addTask',
  'toDoList.signin',
  'toDoList.signup'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  $routeProvider.when('/', {
    templateUrl: '/tasks/tasks.html',
    controller: 'toDoListCtrl'
  }).
  otherwise({redirectTo: '/tasks'});
}])
.controller('toDoListCtrl', function($scope,$location) {
  var base_url='http://localhost:9000';
    $.get(base_url+'/api/tasks').then(function(response){
        var taskList=response;
        $scope.taskList=taskList;
        $scope.$apply();
        $.each(taskList, function (idx, item) {
          console.log(item.username);
        
        })
        //console.log(taskList.username);
    });

    $scope.signIn=function(){
      console.log('in');
      $location.path('/signin');
      //window.location = "#addTask";
  }
  $scope.addTaskFunction=function(){
    console.log('in');
    $location.path('/addTask');
    //window.location = "#addTask";
}
$scope.signUp=function(){
  console.log('in');
  $location.path('/signup');
  //window.location = "#addTask";
}
$scope.home=function(){
  console.log('in');
  $location.path('/tasks');
  //window.location = "#addTask";
}  
});
