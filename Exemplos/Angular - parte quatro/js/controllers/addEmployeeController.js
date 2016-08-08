angular.module('app').controller('AddEmployeeController', function($scope, $location, employeeAPI, departments){
    $scope.name = "Talent Management";
    $scope.departments = departments.data;
    
    // var loadDepartments = function() {
    //     departmentsAPI.getDepartments().success(function(data){
    //         $scope.departments = data;
    //     }).error(function(data, status){
    //         $scope.message = "Erro: " + data;
    //     })
    // };

    $scope.addEmployee = function(employee) {
        employeeAPI.saveEmployee(employee).success(function(data){
            delete $scope.emp;
            $scope.empForm.$setPristine();
            $location.path('/employees');
        });        
    };

});

  