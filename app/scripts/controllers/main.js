'use strict';

/**
 * @ngdoc function
 * @name rackspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rackspaceApp
 */
angular.module('rackspaceApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.userData = [];
	$http.get("http://jsonplaceholder.typicode.com/posts").then(function(response) {
         $scope.userData = response.data;
    });

    $scope.sortOrder = function (type) {
    	if (type === 'ASC') {

    	} else {
    		//DESC
    	}
    };
  });
