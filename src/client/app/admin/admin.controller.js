(function() {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger'];
    /* @ngInject */
    function AdminController(logger) {
        var self = this;
        self.title = 'Admin';

        var activate = function activate() {
            logger.info('Activated ' + self.title + ' View');
        };

        activate();
    }
})();
