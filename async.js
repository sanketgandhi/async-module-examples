/**
 * Using async module
 */
const async = require('async');

const startProcessing = function() {
    console.log('Start Processing');
    async.waterfall([download, process, upload, del], function(err, data) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('Finished Processing');
        }
    });
};

const download = function(callback) {
    console.log('Start downloading file ➡️');
    delay();
    console.log('Finished downloading ✅');
    // callback('Download Failed!!! 🐛', 'Downloaded data');
    callback(null, 'Downloaded data')
};

const process = function(data, callback) {
    console.log('Start Procesing File ➡️');
    console.log('The data is received from download: ', data);
    delay();
    console.log('Finished processing ✅');
    callback();
};

const upload = function(callback) {
    console.log('Start Uploading File ➡️');
    delay();
    console.log('File Uploaded Successfully ✅');
    callback();
};

const del = function(callback) {
    console.log('Started deleting file ➡️');
    delay();
    console.log('File Deleted Successfully ✅');
    callback();
};

const delay = function() {
    for (let index = 0; index < 10000; index++) {
        for (let x = 0; x < 100000; x++) {
            //do nothing
        }
    }
};

startProcessing();
