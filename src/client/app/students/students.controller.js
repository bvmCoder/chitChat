(function() {
    'use strict';

    angular
        .module('app.students')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function StudentsController($q, dataservice, logger) {
        var self = this;

        self.title = 'Students';
        self.news = {
            title: 'Digital Short Reads',
            description: 'Digital Short Reads is a SPA Application for Made By Scholastic!'
        };
        ///self.messageCount = 0;
        self.student;
        self.orderBy = 'name';  // Default sort type || Sort By
        self.sortReverse = false; // Default sort order

        self.sortColumn = function sortColumn(orderByVal) {
            if(self.orderBy === orderByVal) {
                self.sortReverse = !self.sortReverse;
            } else {
                self.orderBy = orderByVal;
                self.sortReverse = true;
            }
        };

        var getMessageCount = function getMessageCount() {
            return dataservice.getMessageCount().then(function(data) {
                self.messageCount = data;
                return self.messageCount;
            });
        };

        

        var getStudent = function getStudent() {
            return dataservice.getStudent().then(function(data) {
                self.student = data;
                //logger.log(self.student);
                self.student.forEach(function(student) {
                    //logger.log(student.isSelected);
                });
                return self.student;
            });
        };

        var activate = function activate() {
            var promises = [getMessageCount(), getStudent()];
            return $q.all(promises).then(function() {
                logger.info('Activated ' + self.title + ' View');
            });
        };

        activate();

        self.getSelectStudentCount = function getSelectStudentCount() {
            var count = 0;
            //logger.log(self.student);
            angular.forEach(self.student, function(data) {
                count += data.isSelected ? 1 : 0;
            });
            return count;
        };
    }
})();
