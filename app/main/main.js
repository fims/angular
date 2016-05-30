'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function () {
    //Please avoid using $scope...

    //trick to access scope in inner function
    var self = this;
    this.todos = [];

    this.priorities = [
      'High',
      'Medium',
      'Low'
    ];

    this.add = function(todo){
      console.log("add todo " + todo.name + " "  + todo.priority);
      var tmp = angular.copy(todo);
      self.todos.push(tmp);
    }
  });
