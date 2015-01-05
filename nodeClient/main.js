var DDP = require("ddp");
var Job = require('meteor-job');

var ddp = new DDP();
Job.setDDP(ddp);

ddp.connect(function (err) {
    if (err) throw err;
    var workers = Job.processJobs('requestJobs', 'query', {pollInterval: 100},
        function (job, cb) {
            console.log('requestJob = ' + job.data.query);

            // TODO: Execute the request (e.g. query another server) a

            var requestResult = job.data.query + ' result';

            // Send the request result back to the server and mark the job as done
            ddp.call('requestResult', [job.data.requestId, requestResult]);
            job.done();

            // NOTE: if the request fails and can be re-run, we can mark it as failed
            //job.fail("");

            // must invoke the callback when we are all done
            cb();
        }
    );
});


