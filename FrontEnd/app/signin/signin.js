'use strict';
angular.module('toDoList.signin',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
   $routeProvider. 
   when('/signin',{
        templateUrl:'signin/signin.html',
        controller: 'signInCtrl'
    })
}])
.controller('signInCtrl',[function($scope){
    console.log('signin init');
}]);