/* jshint -W117, -W030 */
describe('StudentsController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.students');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getStudent').returns($q.when(student));
        controller = $controller('StudentsController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Students controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Students', function () {
                expect(controller.title).to.equal('Students');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have news', function () {
                expect(controller.news).to.not.be.empty;
            });

            it('should have at least 1 student', function () {
                expect(controller.student).to.have.length.above(0);
            });

            it('should have people count of 5', function () {
                expect(controller.student).to.have.length(7);
            });
        });
    });
});
