angular.module("app").service("departmentsAPI", function($http, config){
    this.getDepartments = function () {
        return $http.get(config.baseUrl + 'departments');
    };
});