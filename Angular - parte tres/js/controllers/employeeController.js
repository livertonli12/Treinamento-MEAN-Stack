angular.module('app').controller('MainController', function($scope, $http){
    $scope.name = "Talent Management";
    $scope.employees = [];
    $scope.departments = [];

    var loadEmployees = function() {
        $http.get('http://localhost:3000/api/employees').success(function(data){
            $scope.employees = data;
        }).error(function(data, status){
            $scope.message = "Erro: " + data;
        });
    };

    var loadDepartments = function() {
        $http.get('http://localhost:3000/api/departments').success(function(data){
            $scope.departments = data;
        }).error(function(data, status){
            $scope.message = "Erro: " + data;
        })
    };

    $scope.addEmployee = function(employee) {
        $http.post('http://localhost:3000/api/employees', employee).success(function(data){
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

  