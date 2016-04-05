(function() {
    'use strict';

    angular
        .module('app.shortReads')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'shortReads',
                config: {
                    url: '/shortReads',
                    templateUrl: 'app/shortreads/shortreads.html',
                    controller: 'ShortReadsController as src',
                    title: 'Shortreads',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-dashboard"></i> Short Reads'
                    }
                }
            }
        ];
    }
})();
