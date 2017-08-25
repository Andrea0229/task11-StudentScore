/**
 * 班级类：班级号
 */
class Class{
    constructor(number){
        this.number = number;
        this.members = [];
    }

    appendStudent(stu){
        this.members.push(stu);
        console.log(`学生${stu.name}的成绩被添加`)
    }
}

module.exports = Class;