'use strict';

angular.module('toDoList.tasks',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
   $routeProvider. 
   when('/tasks',{
        templateUrl:'tasks/tasks.html',
        controller: 'TasksCtrl'
    })
}])
.controller('TasksCtrl',function($scope,$location,$http){

    console.log('TasksCtrl init');
});