angular.module('app').controller('MainController', function($scope){
    $scope.name = "Talent Management";

    $scope.employees = [
        {name: 'João', phone: '9999-8888', department: 'Inovação'},
        {name: 'Pedro', phone: '9999-8888', department: 'R&S'},
        {name: 'Adalberto', phone: '9999-8888', department: 'Financeiro'}
    ];

    
});

  