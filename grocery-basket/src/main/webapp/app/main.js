'use strict';

/**
 * @ngdoc overview
 * @name groceryApp
 * @description
 * # groceryApp
 *
 * Main module of the groceryApp application.
 */

var app = angular.module('groceryApp', ['ngRoute']);

app.constant('config', {
    debug: false,
    useMocks: false,
    viewsDir: '/views/',
    modalsDir: '/modals/',

    endpointDict: {
        getJsonRates        :	'http://apilayer.net/api/live' + '?access_key=5b1832244ddefba13a9b2b7648505d43'
    }
})

    .config(['$routeProvider', 'config', function ($routeProvider, config) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/grocerybasket.html',
                controller: 'GroceryBasketController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);