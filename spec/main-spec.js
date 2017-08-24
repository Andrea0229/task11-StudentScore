const optionList = require("../main/optionList");
const getOptions = require('../main/main');

describe("命令行菜单栏列表", function () {
    it("命令行-选项列表1：",function() {
        let option = optionList()[0];
        let result = "1. 添加学生";

        expect(option).toEqual(result);
    });

    it("命令行所有选项列表-getOptions方法：",function () {
        spyOn(console.log());
        let options = getOptions();
        let result = `1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1~3）：`;

        expect(options).toEqual(result);
    })
});

describe("命令行选项",function () {
    it("选择1：",function() {
        let options = optionList();
        let op = selectOption(1);
        let expect_str = `请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：`;
        // let option =
        // expect()
    })
})