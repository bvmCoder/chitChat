(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function HomeController($q, dataservice, logger) {
        var self = this;
        self.news = {
            title: 'Digital Short Reads',
            description: 'Digital Short Reads is a SPA Application for Made By Scholostic!'
        };
        
        self.student = [];
        self.title = 'Home';

        /*var getMessageCount = function getMessageCount() {
            return dataservice.getMessageCount().then(function(data) {
                self.messageCount = data;
                return self.messageCount;
            });
        };

        var getStudent = function getStudent() {
            return dataservice.getStudent().then(function(data) {
                self.student = data;
                return self.student;
            });
        };

        var activate = function activate() {
            var promises = [getMessageCount(), getStudent()];
            return $q.all(promises).then(function() {
                logger.info('Activated ' + self.title + ' View');
            });
        };

        activate(); */
    }
})();
