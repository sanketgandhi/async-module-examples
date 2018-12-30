const async = require('async');

const startProcessing =  () => {
    console.log('Start Processing')
    const events = ['download', 'process', 'upload', 'delete'];
    /* events.forEach(event => {
        process(event, () => {
            console.log('Callback for: '+ event);
        });
    }); */
    async.forEachSeries(events, (event, callback) => {
        // Callback above is provided by async module. Unless you do not call callback it will not go to the next event.
        process(event, callback);
    }, (err, data) => {
        if(err) {
            console.log('Error in process' + err);
        } else {
            console.log('Done!');
        }
    });
}

const process = (eventType, callback) => {
    let timeToProcess = 0;
    switch (eventType) {
        case 'download':
            timeToProcess = 1000;
            break;
        case 'process':
            timeToProcess = 2000;
            break;
        case 'upload':
            timeToProcess = 2500;
            break;
        case 'delete':
            timeToProcess = 100;
            break;
    }
    setTimeout(() => {
        console.log('Finished: ', eventType);
        callback();
    }, timeToProcess);
}

startProcessing();