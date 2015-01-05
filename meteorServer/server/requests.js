Meteor.publish('requests', function() {
    return Requests.find();
});

Meteor.methods({
    // this method is called with the result of the request
    requestResult: function(requestId, result) {
        console.log('requestResult ' + result);
        // update the request with the result
        Requests.update(requestId, {$set : {result: result}});
    }
});