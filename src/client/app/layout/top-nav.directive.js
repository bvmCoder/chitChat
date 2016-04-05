(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('topNav', TopNav);

    /* @ngInject */
    function TopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'tnv',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/top-nav.html'
        };

        /* @ngInject */
        function TopNavController() {
            var self = this;
        }

        return directive;
    }
})();
