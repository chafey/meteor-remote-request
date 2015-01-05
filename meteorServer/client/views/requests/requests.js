Template.requests.helpers({
    requests: function () {
        return RequestJobs.find();
    },
    result: function() {
        return Requests.findOne(this.data.requestId).result;
    }
});
