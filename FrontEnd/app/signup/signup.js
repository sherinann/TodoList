'use strict';
var base_url='http://localhost:9000';
angular.module('toDoList.signup',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
   $routeProvider. 
   when('/signup',{
        templateUrl:'signup/signup.html',
        controller: 'signUpCtrl'
    })
}])
.controller('signUpCtrl',function($scope,$http){
    $scope.signUp=function(){
    console.log('signup init');
    var username = $scope.username;
    var password = $scope.password;
    var phone = $scope.phone;
    var email = $scope.email;
    var rpassword = $scope.rpassword;
    console.log(username);

    if (password != rpassword) {
        alert("password error");
    }
    else {
        var url = base_url + '/api/users/';
        $.post(url,
            {
                username:username,
                password:password
            },
            function (data, status) {
            if (data.status == "OK") {
                condole.log("success");
            }
    })

            }
    }
    

});