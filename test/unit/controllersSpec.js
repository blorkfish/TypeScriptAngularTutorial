/// <reference path="../../Scripts/typings/angularjs/angular-scenario.d.ts"/>
/// <reference path="../../app/ts/controllers.ts"/>
//import PhoneListCtrl = require('../../app/ts/controllers');
describe('test/unit/PhoneCat controllers', function () {
    describe('PhoneListCtrl', function () {
        it('should create "phones" model with 3 phones', function () {
            var scope = {}, ctrl = new PhoneListCtrl(scope);

            //var test = new PhoneListCtrl.PhoneListCtrl();
            expect(scope.phones.length).toBe(3);
        });
        it('should fail', function () {
            expect('test').toEqual('test');
        });
    });

    describe('non Global controllers', function () {
        beforeEach(module('phonecatApp'));

        describe('PhoneListCtrl', function () {
            it('should create phones model with 3 phones', inject(function ($controller) {
                var scope = {};
                var ctrl = $controller('PhoneListCtrl', { $scope: scope });
                expect(scope.phones.length).toBe(3);
            }));
        });
    });
});
//# sourceMappingURL=controllersSpec.js.map
