const Student = require('../main/Student');
const Class = require('../main/Class');
const Subject = require('../main/Subject');

describe("学生类测试",function () {
    it("构造函数",function () {
        let cls = new Class(6);
        let sub1 = new Subject("语文",115);
        let sub2 = new Subject("数学",135);
        let subjects = [sub1,sub2];
        let student = new Student("张三","1101",cls,subjects);
        let expect_str = "张三:1101,6\n语文:115\n数学:135\n";

        expect(expect_str).toEqual(printStudent(student))
    })
})

function printStudent(student) {
    let result = `${student.name}:${student.stuId},${student.clazz.number}\n`;
    student.subjects.forEach(item=>{
        result += `${item.name}:${item.score}\n`
    });
    return result;
}
