/// <reference path="../../Scripts/typings/angularjs/angular-scenario.d.ts"/> 
/// <reference path="../../app/ts/controllers.ts"/>

//import PhoneListCtrl = require('../../app/ts/controllers');

describe('test/unit/PhoneCat controllers', () => {
    describe('PhoneListCtrl', () => {
        it('should create "phones" model with 3 phones', () => {
            var scope:any = {}, ctrl = new PhoneListCtrl(scope);
            //var test = new PhoneListCtrl.PhoneListCtrl();
            expect(scope.phones.length).toBe(3);
        });
        it('should fail', () => {
            expect('test').toEqual('test');
        });
    });

    describe('non Global controllers', () => {

        beforeEach(module('phonecatApp'));

        describe('PhoneListCtrl', () => {
            it('should create phones model with 3 phones', inject(($controller) => {
                var scope:any = {};
                var ctrl = $controller('PhoneListCtrl', { $scope: scope });
                expect(scope.phones.length).toBe(3);
            }));
        });

    });

});