angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

}
