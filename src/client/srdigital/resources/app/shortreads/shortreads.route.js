(function() {
    'use strict';

    angular
        .module('app.shortreads')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'shortreads',
                config: {
                    url: '/',
                    templateUrl: 'app/shortreads/shortreads.html',
                    controller: 'ShortreadsController',
                    controllerAs: 'src',
                    title: 'Shortreads',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-home"></i> Shortreads'
                    }
                }
            }
        ];
    }
})();
