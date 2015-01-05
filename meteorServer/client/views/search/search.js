
Template.search.events({
    'submit form': function(e) {
        e.preventDefault();

        var query = $('#query').val();

        var requestId = Requests.insert({
            query: query
        });

        var job = RequestJobs.createJob('query', {
            query : query,
            requestId : requestId
        });
        job.save();
    }
});
