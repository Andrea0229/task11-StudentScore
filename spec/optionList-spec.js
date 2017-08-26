const [optionList,getStuTrueMsg] = require('../main/optionList');

describe("菜单栏测试",function () {
    it("学生信息是否正确",function () {
        let stuMsg = getStuTrueMsg();
        let expect_str = "王杰";
        expect(expect_str).toEqual(stuMsg[0]);
    })
})