(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('imgPerson', ImgPerson);

    ImgPerson.$inject = ['config'];
    /* @ngInject */
    function ImgPerson(config) {
        //Usage:
        //<img img-person="{{person.imageSource}}"/>
        var basePath = config.imageBasePath,
            unknownImage = config.unknownPersonImageSource,
            directive = {
                restrict: 'A',
                link: link
            };
        return directive;

        function link(scope, element, attrs) {
            attrs.$observe('imgPerson', function(value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }
})();
