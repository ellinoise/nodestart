/**
 * Created by ellinoise on 26.11.15.
 */

function start() {
    console.log("Request handler 'start' was called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;