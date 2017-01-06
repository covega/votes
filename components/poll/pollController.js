'use strict';

const percent = 100;

votesApp.controller('PollController', ['$scope', '$routeParams',
	function($scope, $routeParams){

        var computePercents = function (poll) {
            poll.percentFor = percent* (poll.votesFor / poll.numResponses);
            poll.percentAgainst = percent* (poll.votesAgainst / poll.numResponses);
        }

        $scope.login = false;
        $scope.poll;


        // here would be a db query
        var poll = {
            topic: "Does the University Hate Fun?",
            numResponses: 100,
            votesFor: 90,
            votesAgainst: 10,
            currentStance: "none",
        };
        computePercents(poll);
        $scope.poll = poll;
	}]);
