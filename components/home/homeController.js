'use strict';

votesApp.controller('HomeController', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
        $scope.login = false;
		$scope.newPolls = [];
		$scope.oldPolls = [];

		// here would be a db query

		// for mock only
		var poll = {
		    topic: "Does Stanford Hate Fun?",
		    numResponses: 100,
		    votesFor: 90,
		    votesAgainst: 10
		};

		poll.percentFor = percent* (poll.votesFor / poll.numResponses);
		poll.percentAgainst = percent* (poll.votesAgainst / poll.numResponses);

		$scope.newPolls.push(poll);
    }]);

