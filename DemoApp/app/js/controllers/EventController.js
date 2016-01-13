'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) { //eventData defined in services/EventData.js

        //$scope.event = eventData.event;
        /*
        eventData.getEvent()
            .success(function(event) { $scope.event = event; })
            .error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                });
        */

        $scope.event = eventData.getEvent().$promise.then( //try then and catch
            function(event) {$scope.event = event; console.log(event); },
            function(response) { console.log(response); }
        ); //bind directly to resource



        $scope.snippet = '<span style="color:red">Here\'s my snippet!<span>';
        $scope.boolValue = true;
        $scope.mystyle = { color: 'red' };
        $scope.oddClass = "odd-class";
        $scope.buttonDisabled = true;
        $scope.personCount = 12;
        $scope.sortorder = 'name';

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    });