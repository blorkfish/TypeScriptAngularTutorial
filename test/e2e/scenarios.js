//var test = "test";
describe('PhoneCat App', function () {
    describe('Phone list view', function () {
        beforeEach(function () {
            browser().navigateTo('../../app/index2.html');
        });

        it('should filter the phone list as user types into the search box', function () {
            expect(repeater('.phones li').count()).toBe(3);

            input('query').enter('nexus');
            expect(repeater('.phones li').count()).toBe(1);

            input('query').enter('motorola');
            expect(repeater('.phones li').count()).toBe(2);
        });
    });
});
//# sourceMappingURL=scenarios.js.map
