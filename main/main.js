const optionList = require("./optionList");
const getOption = require('cli-interact').getNumber;

function main() {
    // getOptions();
    let options = optionList();
    console.log(options);
    let option = getOption('请输入你的选择（1~3）：')
}

module.exports = main;