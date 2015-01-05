Meteor.publish('requestJobs', function() {
    return RequestJobs.find();
    //return StudyContainers.find({creator : this.userId});
    //return StudyContainers.find({owners : this.userId});
    //return StudyContainers.find({});
});


RequestJobs.allow({
    admin: function (userId, method, params) {
        return true;
    }
});

Meteor.startup(function() {
    RequestJobs.startJobs();
});

RequestJobs.processJobs(
    'query',
    {
        concurrency: 2,
        pollInterval: 500
    },
    function(job, callback) {

        console.log('query job - %j', job);

        var request = Requests.findOne(job.data.requestId);
        Requests.update(job.data.requestId, {$set : {result: 'hello'}});

        job = job.fail();
        //job = FileUploadJobQueue.makeJob(job);
        //job.restart({wait:1000});
        callback();
        return;

    }
);