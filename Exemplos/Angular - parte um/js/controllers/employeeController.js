angular.module('app').controller('MainController', function($scope){
    $scope.name = "Talent Management";

    $scope.employees = [
        {name: 'João', cellphone: '99999-8888', email: 'joao@empresa.com', department: 'Departamento A'},
        {name: 'Pedro', cellphone: '99999-8888', email: 'pedro@empresa.com', department: 'Departamento B'},
        {name: 'Adalberto', cellphone: '99999-8888', email: 'adalberto@empresa.com', department: 'Departamento C'}
    ];

    $scope.departments = [
        { name: 'Departamento A', floor: '1', responsible: 'Responsável A' },
        { name: 'Departamento B', floor: '2', responsible: 'Responsável B' },
        { name: 'Departamento C', floor: '3', responsible: 'Responsável C' },
        { name: 'Departamento D', floor: '2', responsible: 'Responsável D' }
    ];

    $scope.addEmployee = function(employee) {
        $scope.employees.push(angular.copy(employee));
        delete $scope.emp;
        $scope.empForm.$setPristine();
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
});

  