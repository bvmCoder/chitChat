(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('sideBar', Sidebar);

    /* @ngInject */
    function Sidebar() {
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div side-bar">
        //  <div side-bar whenDoneAnimating="sc.sidebarReady()">
        // Creates:
        //  <div side-bar class="sidebar">

        var directive = {
            restrict: 'EA',
            scope: {
                whenDoneAnimating: '&?'
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var $sidebarInner = element.find('.sidebar-inner'),
                $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350, scope.whenDoneAnimating);
                }
            }
        }
    }
})();
