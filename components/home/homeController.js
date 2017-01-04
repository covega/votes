'use strict';

votesApp.controller('HomeController', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
		// Add correct components to each poll
		// Stylize
		// Make interactive
        $scope.login = false;
		$scope.newPolls = [];
		$scope.oldPolls = [];

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

		var computerPercents = function (poll) {
			poll.percentFor = percent* (poll.votesFor / poll.numResponses);
			poll.percentAgainst = percent* (poll.votesAgainst / poll.numResponses);
		}

		computerPercents(newPoll);
		computerPercents(oldPoll);

		$scope.newPolls.push(newPoll);
		$scope.oldPolls.push(oldPoll);

		var showVotes = function (stance, poll, index) {
			
			// highlight the stance in the dom
				// use the id
		}



		$scope.vote = function ($event, poll, index) {
			console.log(poll);
			var stance = $event.currentTarget.classList[0];
			var state;

			if (poll.currentStance === "none") {
				state = "new"
			} else if (poll.currentStance === "for" || poll.currentStance === "against"){
				state = "old"
			} else {	//something is wrong
				console.log('something is wrong');
				return;
			}

			var pollElem = document.getElementById(state + 'Poll-' + index);



			// TODO: check if they've already voted, are logged in
			// send vote/updated vote to backend
			// show vote counts instead of For or Against
			var forButton = document.getElementById(state+'-for-'+index);	
			var againstButton = document.getElementById(state+'-against-'+index);
			if (stance === 'for') {
				if (poll.currentStance === 'against') {
					poll.votedAgainst -= 1;
				} else if (poll.currentStance === 'none') {
					poll.votesFor += 1;
					poll.numResponses += 1;				
				}
				console.log('vote for');
				againstButton.classList.remove('stance');
				againstButton.classList.add('not-stance');				
				forButton.classList.add('stance');
				forButton.classList.remove('not-stance');
			} else if (stance === 'against') {
				if (poll.currentStance === 'for') {
					poll.votedFor -= 1;
				} else if (poll.currentStance === 'none') {
					poll.votesAgainst += 1;					
					poll.numResponses += 1;
				}
				console.log('vote against');
				againstButton.classList.add('stance');
				againstButton.classList.remove('not-stance');
				forButton.classList.remove('stance');
				forButton.classList.add('not-stance');
			} else { // something is wrong
				return;
			}
			computerPercents(poll);
			// TODO: change to SafeHTML
			forButton.innerHTML = poll.percentFor + '%';
			againstButton.innerHTML = poll.percentAgainst + '%';
			poll.currentStance = stance;
			console.log('done');
			//showVotes(stance, poll, index);
		};

    }]);


