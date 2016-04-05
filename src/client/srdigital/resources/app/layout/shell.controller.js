(function() {
    'use strict';

    // this is the main Controller while the app load to the landing page...
    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
    /* @ngInject */
    function ShellController($rootScope, $timeout, config, logger) {
        var self = this;
        // for controller as syntax
        self.busyMessage = 'Please wait ...';
        self.isBusy = true;
        $rootScope.showSplash = true;
        self.navline = {
            title: config.appTitle,
            student: 'Students',
            shortReads: 'Short Reads',
            help: 'Help',
            link: 'https://www.storiaschool.com'
        };

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 1000);
        }
    }
})();
