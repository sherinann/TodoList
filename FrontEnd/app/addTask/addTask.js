
'use strict';
angular.module('toDoList.addTask',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
   $routeProvider. 
   when('/addTask',{
        templateUrl:'addTask/addTask.html',
        controller: 'AddTaskCtrl'
    })
}])

//not yet implemented the user login status saving. hence have to hardcode the username also date now in string not Date format
.controller('AddTaskCtrl',function($scope){
    $scope.createTask=function(){
        var task_name = $scope.task_name;
        var date=  $scope.last_date;
        var status = $scope.status;
        var label = $scope.label;
            var url = base_url + '/api/tasks/';
            $.post(url,
                {
                    username:'sebin',
                    task_name:task_name,
                    date:date,
                    status:status,
                    label:label
                },
                function (data, status) {
                if (data.status == "OK") {
                    console.log("success");
                }
        })
    
                
        }
    console.log('AddTaskCtrl init');
});