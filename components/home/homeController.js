'use strict';

votesApp.controller('HomeController', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
		// Add correct components to each poll
		// Stylize
		// Make interactive
        $scope.login = false;
		$scope.newPolls = [];
		$scope.oldPolls = [];


		$scope.notStanceStyle = {
			"background": "linear-gradient(90deg, #ff0000 50%, #0000ff 0%);",						
		}

		// here would be a db query
		var newPoll = {
		    topic: "Does the University Hate Fun?",
		    numResponses: 99,
		    votesFor: 89,
		    votesAgainst: 10,
		    currentStance: "none",
		};

		var oldPoll = {
		    topic: "Does the University Hate Fun?",
		    numResponses: 100,
		    votesFor: 90,
		    votesAgainst: 10,
		    currentStance: "for",
		};

		var computePercents = function (poll) {
			poll.percentFor = percent* (poll.votesFor / poll.numResponses);
			poll.percentAgainst = percent* (poll.votesAgainst / poll.numResponses);
		}

		$scope.newPolls.push(newPoll);
		$scope.oldPolls.push(oldPoll);


		var setVoteForButtonClasses = function (forButton, againstButton) {
			againstButton.classList.remove('stance');
			againstButton.classList.add('not-stance');				
			forButton.style
			forButton.classList.add('stance');
			forButton.classList.remove('not-stance');


		};

		var setVoteAgainstButtonClasses = function (forButton, againstButton) {
			againstButton.classList.add('stance');
			againstButton.classList.remove('not-stance');
			forButton.classList.remove('stance');
			forButton.classList.add('not-stance');
		};

		var setState = function (poll) {
			var state;
			if (poll.currentStance === "none") {
				state = "new";
			} else if (poll.currentStance === "for" || poll.currentStance === "against"){
				state = "old";
			} else {
				console.log('something is wrong');
			}
			return state;
		};

		var updateVotedForPoll = function (poll) {
			if (poll.currentStance === 'against') {
				poll.votedAgainst -= 1;
			} else if (poll.currentStance === 'none') {
				poll.votesFor += 1;
				poll.numResponses += 1;				
			}
			return poll;
		};

		var updateVotedAgainstPoll = function (poll) {
			if (poll.currentStance === 'for') {
				poll.votedFor -= 1;
			} else if (poll.currentStance === 'none') {
				poll.votesAgainst += 1;					
				poll.numResponses += 1;
			}

			return poll;
		};

		var showPercentages = function (poll, forButton, againstButton) {
			computePercents(poll);
			// TODO: change to SafeHTML
			forButton.innerHTML = poll.percentFor + '%';
			againstButton.innerHTML = poll.percentAgainst + '%';			
		};

		$scope.vote = function ($event, poll, index) {
			var stance = $event.currentTarget.classList[0];
			var state = setState(poll);

			var pollElem = document.getElementById(state + 'Poll-' + index);

			// TODO: check if they've already voted, are logged in
			// send vote/updated vote to backend
			var forButton = document.getElementById(state+'-for-'+index);	
			var againstButton = document.getElementById(state+'-against-'+index);
			if (stance === 'for') {
				poll = updateVotedForPoll(poll);
				setVoteForButtonClasses(forButton, againstButton);
			} else if (stance === 'against') {
				poll = updateVotedAgainstPoll(poll);
				setVoteAgainstButtonClasses(forButton, againstButton);
			} else { // something is wrong
				return;
			}

			poll.currentStance = stance;
			showPercentages(poll, forButton, againstButton);
		};

    }]);


