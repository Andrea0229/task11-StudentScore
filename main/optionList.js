"use strict";
const Question = require('cli-interact').question;
const getOption  =require('cli-interact').getNumber;
const Student = require('./Student');
const Class = require('./Class');
const Subject = require('./Subject');
var students = [];

function optionList(){
    console.log(getOptionList().join("\n"));
    let num = getOption("请输入你的选择（1～3）：\n");
    selectOption(num);
}

function getOptionList() {
    return ["1. 添加学生", "2. 生成成绩单", "3. 退出"];
}

/**
 * 学生科目及成绩
 * @param stuTemp
 * @returns {Array}
 */
function getSubjects(stuMsg) {
    let subjects = [];

    for (let i = 3; i < stuMsg.length; i++) {
        let subs = stuMsg[i].split(':');
        let subject = {};
        let a = subs[0];
        subject[a] = subs[1];

        subjects.push(subject);
    }
    return subjects;
}

function addStudent() {
    let stuMsg = Question("请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：");
    let stuTemp = getStuTrueMsg(stuMsg);
    let clazz = new Class(parseInt(stuTemp[2]));
    let subjects = getSubjects(stuTemp);
    let newStu = new Student(stuTemp[0], stuTemp[1], clazz, subjects);
                // console.log("添加学生的："+newStu.name+","+newStu.id)
    clazz.appendStudent(newStu);
    return newStu;
}

/*
判断输入学生信息的格式是否正确
 */
function isStuTrueMsg(stuMsg){  //出错条件没有考虑完
    if(stuMsg.indexOf(',') < 0){
        return false;
    }
    let stuTemp = stuMsg.split(',');
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
        let msg = stuMsg.split(',');
        return msg;
    }else{
        stuMsg = Question(`请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：`);
        getStuTrueMsg(stuMsg);
    }
}

function getStuId(stuIds) {
    if (isStuId(stuIds)) {
        let ids = [stuIds];
        if(stuIds.indexOf(',') >= 0){
            ids = stuIds.split(",");
        }
        return ids;

    } else {
        stuIds = Question(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
        let ids = getStuId(stuIds);
        printStuMsg(ids);
    }
}

function printStuMsg(ids) {
    let result = `成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n`;
    // for()


}

/**
 * 输出学生成绩
 */
function printStudent() {
    let Ids = Question(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
    let stuIds = getStuId(Ids);
    let result = `成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n`;
    let [aveScore,sumScore, sumScores] = [0,0,[]];

    stuIds.forEach(id =>{
        let student = getStudent(id);
        if(student){
            [aveScore,sumScore,result] = getStuScore(student, result);
            result += `${aveScore}|${sumScore}\n`
            sumScores.push(sumScore);
        }
    })

    console.log(result);
}

/**
 * 获取学生成绩
 */
function getStuScore(student, result) {
    let [aveScore, sumScore] = [0,0];
    result += `${student.name}|`;
    student.subjects.forEach(sub=>{         console.log(sub.score+"-");
        sumScore += sub.score;
        result += `${sub.score}|`
    });
    aveScore = sumScore / student.subjects.length;
    return [aveScore, sumScore,result];
}

/**
 * id是否为现有学生的id
 */
function getStudent(id) {
    return students.find(stu =>{
        return stu.stuId === id;
    })
}

/**
 * 判断输入学号的格式是否正确
 */
function isStuId(stuIds) {      //判断特殊字符除了‘，’还有其他的吗（仅含有数字和逗号）
    // if(stuIds.indexOf(",") < 0  && isNaN(Number(stuIds))){
    //     return false;
    // }
    return true;
}

function selectOption(num){
    // let result = "";

    switch(num){
        case 1:
            let student = addStudent();
            students.push(student);
            /*students.forEach(stu=>{
                console.log(stu.stuId+ "," + typeof (stu.stuId ));
            });*/
            optionList();
            break;
        case 2:                         
            printStudent();
            optionList();
            break;
        default :       //添加异常判断
            break
    }

    // console.log(result);
    // return result;
}

// module.exports = [optionList,selectOption,addStudent,getStuTrueMsg] ;
module.exports = optionList;