const Subject  = require("../main/Subject");

describe("课程类的测试", function () {
    it('创建课程对象',function () {
        let sub1 = new Subject("语文",115);
        let sub2 = new Subject("数学",135);
        let subjects = [sub1,sub2];
        let expect_str = `语文：115 | 数学：135 | 125 | 250`;
        let result = printSubject(subjects);

        expect(expect_str).toEqual(result);
    })
});

/**
 * 测试学生科目
 * @param subjects
 */
function printSubject(subjects){
    let result = ``;
    let sum = 0;
    subjects.forEach(sub=>{
        sum += sub.score;
        result += `${sub.name}：${sub.score} | `

    });
    result += `${sum/subjects.length} | ${sum}`;
    return result;
}