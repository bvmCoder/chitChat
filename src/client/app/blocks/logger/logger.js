(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            showToasts: true,
            error   : _error,
            info    : _info,
            success : _success,
            warning : _warning,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        //

        function _error(message, data, title) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function _info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function _success(message, data, title) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function _warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());
