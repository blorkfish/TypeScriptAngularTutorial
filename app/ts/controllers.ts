/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"/>

var phonecatApp = angular.module('phonecatApp', []);

class PhoneListCtrl  {
    constructor($scope) {
        $scope.phones = [
            { 'name': 'Nexus S', 'snippet': 'Fast just got faster' },
            { 'name': 'Motorola', 'snippet': 'Next generation tablet' },
            { 'name': 'Motorola Xoom', 'snippet': 'Next, next generation tablet' }
        ];
    }
};