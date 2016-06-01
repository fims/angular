'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PilotCtrl
 * @description
 * # PilotCtrl
 * ;)
 */
angular.module('angularApp')
  .controller('PilotCtrl', function () {
    //Please avoid using $scope...

    this.quotes = [{
      "person": "Phoebe",
      "quote": "Wait! Does he eat chalk? Just 'cause I don't want her to go through what I went through with Carl."
    },
      {
        "person": "Chandler",
        "quote": "...and I realize, there's a phone..... there."
      }
      ,
      {
        "person": "Chandler",
        "quote": "...and it turns out it's my mother, which is very strange because... she NEVER calls."
      }
      ,
      {
        "person": "Ross",
        "quote": "Nuh-uh, no, no, don't. Stop cleansing my aura!"
      }
      ,
      {
        "person": "Chandler",
        "quote": "Sometimes I wish I was a lesbian. Did I say that out loud?"
      }
      ,
      {
        "person": "Rachel",
        "quote": "And that's when it hit me--how much Barry looks like Mr. Potato Head. Ya know, I mean, I always knew he looked familiar, but..."
      }
    ]
    ;

  });
