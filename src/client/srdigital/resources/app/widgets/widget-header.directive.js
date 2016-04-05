(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('widgetHeader', WidgetHeader);

    /* @ngInject */
    function WidgetHeader() {
        //Usage:
        //<div widget-header title="vm.map.title"></div>
        // Creates:
        // <div widget-header=""
        //      title="Movie"
        //      allow-collapse="true" </div>
        var directive = {
            restrict: 'EA',
            scope: {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@'
            },
            templateUrl: 'app/widgets/widget-header.html'
        };
        return directive;
    }
})();
