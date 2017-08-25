const Class = require('../main/Class');
const Student = require('../main/Student');

describe("班级类的测试", function () {
    it('创建类对象',function () {
        let cls = new Class(2);
        let expect_cls = 2;

        expect(expect_cls).toEqual(cls.number);
    })
});

describe('班级方法的测试', function () {
    it('班级成员为空',function () {
        let cls = new Class(6);
        let expect_member = [];
        let members = cls.members;
        expect(expect_member).toEqual(members);
    });

    it('添加一位学生',function () {
        let cls = new Class(6);
        let subjects = {"语文":115, "数学":135};
        let stu = new Student("XiaoZhang", "1503210001", 6, subjects);
        // cls.appendStudent(stu);

        // expect(stu).toEqual(cls.members[0]);
    })
})