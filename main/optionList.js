"use strict";
function optionList(){
    return ["1. 添加学生","2. 生成成绩单","3. 退出"];
}

function selectOption(num){
    let result = "";
    switch(num){
        case 1:
            result = `请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：`;
            break;
        case 2:
            result = `请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
            break;
        default :       //添加异常判断
            break
    }

    return result;
}

module.exports = [optionList,selectOption] ;
