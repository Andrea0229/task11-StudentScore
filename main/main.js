const optionList = require("./optionList");

function getOptions() {
    let options = optionList().join('\n');
    console.log(options);
}

function main() {
    getOptions();
}

module.exports = main;