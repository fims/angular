'use strict';

describe('Controller: PilotCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var PilotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PilotCtrl = $controller('PilotCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should contain a list of quotes', function () {
    expect(PilotCtrl.quotes.length).toBe(6);
  });
});
