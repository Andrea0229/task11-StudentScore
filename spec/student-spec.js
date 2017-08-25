const Student = require('../main/Student');

describe("学生类测试",function () {
    it("构造函数",function () {
        let subjects = {"语文":115, "数学":135};
        let stu = new Student("XiaoZhang", "1503210001", 6, subjects);

        expect("XiaoZhang").toEqual(stu.name);
        expect('1503210001').toEqual(stu.stuId);
        expect(6).toEqual(stu.clazz);
        expect(135).toEqual(stu.subjects["数学"]);
        expect(115).toEqual(stu.subjects["语文"]);
    })
})