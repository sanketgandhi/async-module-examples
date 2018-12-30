/**
 * This example is without using async module
 */
const startProcessing = function() {
    console.log('Start Processesing');
    download(function() {
        process(function () {
            upload(function () {
                del(function () {
                    console.log("All function has benn proceessed!");
                });
            });
        });
    });
};

const download = function(callback) {
    console.log('Start downloading file ➡️');
    delay();
    console.log('Finished downloading ✅');
    callback(null, 'Downloaded data')
};

const process = function(callback) {
    console.log('Start Procesing File ➡️');
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

// Mock up function to illustrate the real time scenario
const delay = function() {
    for (let index = 0; index < 10000; index++) {
        for (let x = 0; x < 100000; x++) {
            //do nothing

        }
    }
};

startProcessing();