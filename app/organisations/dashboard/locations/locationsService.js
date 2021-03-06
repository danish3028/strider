define(['angular'], function(angular) {
  "use strict";

  angular.module('services.locations', [])
    .service('Locations', ['$resource', 'apiUrl',
      function($resource, apiUrl) {
        return $resource(apiUrl + 'organisations/:orgId/locations/:id', null, {
          update: {
            method: 'PUT'
          }
        });
      }
    ]);
});