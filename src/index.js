angular
.module('app', [
    'ui.router',
    'ngMaterial'
])
.constant('AppSettings', {
    appUrl: 'https://meeting-tracker.soloweb.pt',
    apiUrl: 'https://api.meeting-tracker.soloweb.pt'
})
.run(function ($rootScope, AppSettings) {
    $rootScope.AppSettings = AppSettings;
});
