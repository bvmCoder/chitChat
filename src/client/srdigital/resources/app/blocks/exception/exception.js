(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q, logger) {
        var service = {
            catcher: _catcher
        };
        return service;

        function _catcher(message) {
            return function(e) {
                var thrownDescription,
                    newMessage;
                if (e.data && e.data.description) {
                    thrownDescription = '\n' + e.data.description;
                    newMessage = message + thrownDescription;
                }
                e.data.description = newMessage;
                logger.error(newMessage);
                return $q.reject(e);
            };
        }
    }
})();
