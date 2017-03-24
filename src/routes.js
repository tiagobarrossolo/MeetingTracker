angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
    .state('index', {
        url: '/',
        templateUrl: 'index.html',

    })
        .state('meetingsList', {
            url: '/meetingsList',
            // templateUrl: 'app/components/meetings/meetingsList.html',
            template: '<meetings-list flex layout="column"/>'

        })

        /*.state('home', {
            url: '/home',
            template: '<meetings-list flex layout="column"/>',
        })
*/
}
