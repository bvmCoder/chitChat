(function() {
    'use strict';

    angular
        .module('app.shortReads')
        .controller('ShortReadsController', ShortReadsController);

    ShortReadsController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function ShortReadsController($q, dataservice, logger) {
        var self = this;

        self.title = 'Short Reads';
        self.isList = false;
        self.dataLists = [{
                'id': '1',
                'title': 'ABC Rookie Toddler',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888800123456.jpg?w=180&h=180',
                'readinglevel': 'A',
                'texttype':'Magazine Article'
            }, {
                'id': '2',
                'title': 'Baby Animals Rookie',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888810123456.jpg?.jpg?w=180&h=180',
                'readinglevel': 'B',
                'texttype':'Newspaper Article'
            }, {
                'id': '3',
                'title': 'Animal Homes',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888820123456.jpg?w=180&h=180',
                'readinglevel': 'A',
                'texttype':'Interviews'
            }, {
                'id': '4',
                'title': 'Animales de la granja',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888800123456.jpg?w=180&h=180',
                'readinglevel': 'A',
                'texttype':'Magazine Article'
            }, {
                'id': '5',
                'title': 'Animales del bosque',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888810123456.jpg?.jpg?w=180&h=180',
                'readinglevel': 'B',
                'texttype':'Essays'
            }, {
                'id': '6',
                'title': 'Animales del desierto',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888820123456.jpg?w=180&h=180',
                'readinglevel': 'D',
                'texttype':'Magazine'
            }, {
                'id': '7',
                'title': 'Ant Was Tired Sight Words',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888800123456.jpg?w=180&h=180',
                'readinglevel': 'C',
                'texttype':'Essays'
            }, {
                'id': '2',
                'title': 'Baby Animals Rookie',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888810123456.jpg?.jpg?w=180&h=180',
                'readinglevel': 'B',
                'texttype':'Newspaper Article'
            }, {
                'id': '3',
                'title': 'Animal Homes',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888820123456.jpg?w=180&h=180',
                'readinglevel': 'A',
                'texttype':'Interviews'
            }, {
                'id': '4',
                'title': 'Animales de la granja',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888800123456.jpg?w=180&h=180',
                'readinglevel': 'A',
                'texttype':'Magazine Article'
            }, {
                'id': '5',
                'title': 'Animales del bosque',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888810123456.jpg?.jpg?w=180&h=180',
                'readinglevel': 'B',
                'texttype':'Essays'
            }, {
                'id': '6',
                'title': 'Animales del desierto',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888820123456.jpg?w=180&h=180',
                'readinglevel': 'D',
                'texttype':'Magazine'
            }, {
                'id': '7',
                'title': 'Ant Was Tired Sight Words',
                'image': 'http://srdigital-dev.scholastic.com/cover/8888820123456.jpg?w=180&h=180',
                'readinglevel': 'C',
                'texttype':'Essays'
            }

        ];


        var activate = function activate() {
                logger.info('Activated ' + self.title + ' View');

        };
        activate();

    }
})();
