'use strict';

var votesApp = angular.module('votesApp', ['ngRoute', 'ngMaterial']);

votesApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/poll', {
                templateUrl: 'components/poll/pollTemplate.html',
                controller: 'PollController'
            }).
            when('/home', {
                templateUrl: 'components/home/homeTemplate.html',
                controller: 'HomeController'
            }).            
            otherwise({
                redirectTo: '/'
            });
    }]);

votesApp.controller('MainController', ['$scope',
    function ($scope) {
        $scope.main = {};

    }]);
