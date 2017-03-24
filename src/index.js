angular
.module('app', [
    'ui.router',
    'ngMaterial',
    'restmod',
    'restmod.styles.drfPaged'
])
.config(function Config(restmodProvider, AppSettings) {
    restmodProvider.rebase({
        $config: {
            urlPrefix: AppSettings.apiUrl
        }
    });
    restmodProvider.rebase('DjangoDRFPagedApi');
})
.constant('AppSettings', {
    appUrl: 'https://meeting-tracker.soloweb.pt',
    // apiUrl: 'https://api.meeting-tracker.soloweb.pt'
    apiUrl: 'https://api.carmel.soloweb.pt'
})
.run(function ($rootScope, AppSettings) {
    $rootScope.AppSettings = AppSettings;
});

