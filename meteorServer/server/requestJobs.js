Meteor.publish('requestJobs', function() {
    return RequestJobs.find();
});

RequestJobs.allow({
    admin: function (userId, method, params) {
        return true;
    }
});

Meteor.startup(function() {
    RequestJobs.startJobs();
});
