"use strict";
const getStuMsg = require('cli-interact').question;
const option  =require('cli-interact').getNumber;
const Student = require('./Student');
const Class = require('./Class');



function getOptionList() {
    return ["1. 添加学生", "2. 生成成绩单", "3. 退出"];
}

function optionList(){
    console.log(getOptionList());
    let num = option("请输入你的选择（1～3）：\n");
    selectOption(num);
}

function getSubjects(stuTemp) {
    let subjects = [];
    for (let i = 3; i < stuTemp.length; i++) {
        let subMsg = stuTemp[i].split('：');
        let subject = {};
        subject[subMsg[0]] = parseInt(subMsg[1]);
        subjects.push(subject);
    }

    return subjects;
}

function addStudent() {
    let stuMsg = getStuMsg("请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：");
    let stuTemp = getStuTrueMsg(stuMsg);

    console.log(stuTemp);

    /*let subjects = getSubjects(stuTemp);
    let clazz = new Class(stuTemp[2]);
    let student = new Student(stuTemp[0], stuTemp[1], clazz, subjects);*/

}

/*
判断输入学生信息的格式是否正确
 */
function isStuTrueMsg(stuMsg){
    if(stuMsg.indexOf(',') < 0){
        return false;
    }
    let stuTemp = stuMsg.split(',').length;
    if(stuTemp.length < 4){
        return false;
    }
    for(let j=3; j<stuTemp.length; j++){
        if(stuTemp[j].indexOf(":") < 0){
            return false;
        }
    }
    return true;
}

function getStuTrueMsg(stuMsg) {
    if(isStuTrueMsg(stuMsg)){
        let msg = stuMsg.split(','); console.log(msg);
        return stuMsg.split(',');
    }else{
        stuMsg = getStuMsg(`请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：`);
        getStuTrueMsg(stuMsg);
    }
}

function selectOption(num){
    let result = "";
    switch(num){
        case 1:

            addStudent();

            // isStuMsg(stuTemp);
            // let student = new Student(stuTemp[0], stuTemp[1], stuTemp[2])
            break;
        case 2:
            result = `请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
            break;
        default :       //添加异常判断
            break
    }

    console.log(result);
    // return result;
}

// module.exports = [optionList,selectOption,addStudent,getStuTrueMsg] ;
module.exports = optionList;