'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MainCtrl,
    scope,
    mockTodoData;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, todosService) {
    scope = $rootScope.$new();
    mockTodoData = todosService;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      todosService: mockTodoData
      // place here mocked dependencies
    });
  }));

  it('should get a list of all current todos', function () {
    expect(MainCtrl.priorities.length).toBe(3);
  });

  it('should call add a todo to the list', function () {
    var todo = {
      "id": 1,
      "name": "learn angular.js",
      "priority": "High",
      "done": false
    };

    MainCtrl.add(todo);

    expect(MainCtrl.todos.length).toBe(1);
  });

  it('should delete a todo from the list', function () {
    var todos = [
      {
        "id": 1,
        "name": "learn angular.js",
        "priority": "High",
        "done": false
      },
      {
        "id": 2,
        "name": "learn react",
        "priority": "Low",
        "done": true
      }
    ];

    // we want to have a clone of our array
    MainCtrl.todos = todos.slice(0);

    expect(MainCtrl.todos[0]).toEqual(todos[0]);

    MainCtrl.delete(todos[0]);

    expect(MainCtrl.todos[0]).toEqual(todos[1]);
  });

});
