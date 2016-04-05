(function() {
    'use strict';

    angular
        .module('app.students')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'students',
                config: {
                    url: '/students',
                    templateUrl: 'app/students/students.html',
                    controller: 'StudentsController as sc',
                    title: 'students',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }
})();
