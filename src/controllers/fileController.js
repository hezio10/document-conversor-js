const path = require('path');

getFile = function (req, res) {
    console.log("Here's the file");
    console.log(req);
    console.log(res);
}

module.exports = {getFile};