'use strict';
angular.module('toDoList.signout',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
   $routeProvider. 
   when('/signout',{
        templateUrl:'signin/signout.html',
        controller: 'signOutCtrl'
    })
}])
.controller('signOutCtrl',[function($scope){
    console.log('signout init');
}]);