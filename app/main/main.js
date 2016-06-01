'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', ['todosService', function (todosService) {
    //Please avoid using $scope...

    //trick to access scope in inner function
    var self = this;
    this.todos = [];

    this.priorities = [
      'High',
      'Medium',
      'Low'
    ];

    this.add = function (todo) {
      console.log("add todo " + todo.name + " " + todo.priority);
      var tmp = angular.copy(todo);

      todosService.addTodo(todo)
        .then(function (id) {
          //returns id of the new inserted todo
          tmp.id = id;

          //pushing the new entry to the list would be here
        }, function (error) {
          console.error(error);
        });
      self.todos.push(tmp);
    };

    this.mark = function (todo) {
      todo.done = !todo.done;

      todosService.changeTodo(todo)
        .then(function () {
          //mark as not read would be here
        }, function (error) {
          console.error(error);
        });
    };

    this.delete = function (todo) {
      $.each(self.todos, function (i) {
        if (self.todos[i] === todo) {
          self.todos.splice(i, 1);
          return false;
        }
      });

      todosService.deleteTodo(todo)
        .then(function() {
          //removing would be here
        }, function (error) {
          console.error(error);
        });
    };

    var getTodos = function () {
      todosService.getTodos()
        .then(function (todos) {
          console.log(todos);
          self.todos = todos;
        });
    };

    getTodos();

  }]);
