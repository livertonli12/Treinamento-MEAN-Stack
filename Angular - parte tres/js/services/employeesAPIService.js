angular.module("app").factory("employeeAPI", function($http, config){
    var _getEmployees = function() {
        return $http.get(config.baseUrl + 'employees');
    };

    var _saveEmployee = function(employee){
        return $http.post(config.baseUrl + 'employees', employee);
    };

    return {
        getEmployees: _getEmployees,
        saveEmployee: _saveEmployee
    }
});