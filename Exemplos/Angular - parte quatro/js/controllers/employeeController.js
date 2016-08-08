angular.module('app').controller('MainController', function($scope, $http, employeeAPI, departmentsAPI){
    $scope.name = "Talent Management";
    $scope.employees = [];
    $scope.departments = [];

    var loadEmployees = function() {
        employeeAPI.getEmployees().success(function(data){
            $scope.employees = data;
        }).error(function(data, status){
            $scope.message = "Erro: " + data;
        });
    };

    var loadDepartments = function() {
        departmentsAPI.getDepartments().success(function(data){
            $scope.departments = data;
        }).error(function(data, status){
            $scope.message = "Erro: " + data;
        })
    };

    $scope.addEmployee = function(employee) {
        employeeAPI.saveEmployee().success(function(data){
            delete $scope.emp;
            $scope.empForm.$setPristine();
            loadEmployees();
        });        
    };

    $scope.removeEmployee = function(employees) {
        //filter faz: 
        $scope.employees = employees.filter(function(employee){
            if(!employee.selected) return employee;
        });
    };

    $scope.isEmployeeSelected = function(employees) {
        //some faz: 
        return employees.some(function(employee) {
            return employee.selected;
        }); 
    };

    loadEmployees();
    loadDepartments();
});

  