"use strict";

describe("Service: todosService", function () {
  var todosServiceMock, httpBackend;

  beforeEach(module("angularApp"));

  beforeEach(inject(function (todosService, $httpBackend) {
    todosServiceMock = todosService;
    httpBackend = $httpBackend;
  }));

  it("should return a list of todos", function () {
    var dummy = [
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
      },
      {
        "id": 3,
        "name": "Todo",
        "priority": "Low",
        "done": false
      },
      {
        "id": 4,
        "name": "And again something Todo",
        "priority": "Medium",
        "done": false
      }
    ];

    httpBackend.whenGET("../dummyData/initialToDos.json").respond(dummy.slice(0)); //use clone of dummy

    todosServiceMock.getTodos().then(function (data) {
      expect(data).toEqual(dummy);
    });
    httpBackend.flush();
  });

});
