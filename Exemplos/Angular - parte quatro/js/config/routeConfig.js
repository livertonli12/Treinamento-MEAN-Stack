angular.module("app").config(function($routeProvider){
    $routeProvider.when('/employees', {
        templateUrl: 'view/employees.html',
        controller: 'MainController'
    });
    $routeProvider.when('/addEmployee', {
        templateUrl: 'view/addEmployee.html',
        controller: 'AddEmployeeController',
        resolve: {
            departments: function(departmentsAPI){
                return departmentsAPI.getDepartments();
            }
        }
    });
    $routeProvider.otherwise({ redirectTo: '/employees' });
});