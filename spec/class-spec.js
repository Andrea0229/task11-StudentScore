const Class = require('../main/Class');
const Student = require('../main/Student');
const Subject  = require("../main/Subject");

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
        let sub = new Subject("数学",135);
        let student = new Student("张三","1101",cls,sub);
        cls.appendStudent(student);
        let expect_str = "1101,";
        expect(expect_str).toEqual(printStudentId(cls));
    })
})

function printStudentId(clazz){
    let result = ``;
    clazz.members.forEach(item=>{
        result +=  `${item.stuId},`;
    });
    return result;
}
