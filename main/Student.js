/**
 * 学生类：姓名、学号、班级（类）、科目（类）
 */

// var id = 1;
class Student {
    constructor(name, stuId, clazz, subjects) {
        this.name = name;
        this.stuId = stuId;
        this.clazz = clazz;             //班级
        this.subjects = subjects;       //科目数组
    }
}

module.exports = Student;