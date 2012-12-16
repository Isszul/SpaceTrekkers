require([
    'models/user/UserModel',
    'sinon',
    'jasmine'
], function(UserModel) {

    describe('UserModel', function() {
        var userModel;

        beforeEach(function() {

        userModel = new UserModel({
            username: 'testUser',
            password: 'testPassword'
            });

        });

        afterEach(function() {
            delete userModel;
        });


        it('should initialize with the provided username and password',
            function() {

            expect(userModel.username).toEqual('testUser');
            expect(userModel.password).toEqual('testPassword');

        });

        it('should attempt to get the users details when .fetch is called',
            function() {

            var successcallback = sinon.spy();
            var failurecallback = sinon.spy();
            var server = sinon.fakeServer.create();

            userModel.fetch({
                success: successcallback,
                failure: failurecallback
            });

            server.requests[0].respond(200,
            {'Content-Type' : 'application/json'},
            JSON.stringify([{ sessionID: '1234567890', validLogin: 'true'}]));

            expect(successcallback.calledOnce).toBeTruthy();
            expect(failurecallback.calledOnce).toBeFalsy();

            server.restore();

        });

    });

});
