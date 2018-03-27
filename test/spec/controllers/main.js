'use strict';

describe('Controller: MainCtrl', function () {

  
  // load the controller's module
  beforeEach(module('rackspaceApp'));

  var MainCtrl,
    scope, http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have userData empty ', function () {
    expect(scope.userData.length).toBe(0);
  });

  it('should load the external json file ', function () {
      http.expectGET('http://jsonplaceholder.typicode.com/posts').respond(200,{'some_key':'some_value'});
  });


  it('should have some userData ', function () {
      console.log(scope.userData)
  });

  it('should have 4 columns in html table', function () {
   console.log($('.table'));
  });

});



