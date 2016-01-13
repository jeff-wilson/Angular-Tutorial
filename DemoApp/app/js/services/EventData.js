//takes name of service (eventData) and returns data

/* using Promises */
/*
eventsApp.factory('eventData', function($http) {
    return {
        getEvent: function() {
            $http({method: 'GET', url: '/data/event/1'}).

        }
    };
});
*/

/* using resource service */
eventsApp.factory('eventData', function($resource) {
    var res = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function() {

            return res.get({id:1});

            //return $resource('/data/event/:id', {id: '@id'}).get({id:1});

        },
        save: function(event) {
            event.id = 999;
            return res.save(event);
        }
    };
});