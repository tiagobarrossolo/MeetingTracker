/**
 * Created by tiagobarros on 24/03/17.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('MeetingsTable', RestmodFactory);

    /* @ngInject */
    function RestmodFactory(restmod) {
        return restmod.model('/media');
    }
})();
