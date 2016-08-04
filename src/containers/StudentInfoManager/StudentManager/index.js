/**
 * 学生信息筛查
 * Created by ZhuGongpu on 16/4/28.
 */

import React from "react";
import {Button} from "antd";
import StudentList from "../../../components/StudentManager/StudentList";
import SearchInput from "../../SearchInput";

export default class StudentManager extends React.Component {

    constructor(props) {
        super(props);
        //TODO: 定义数据
        this.state = {
            students: [{
                id: "120501201",
                name: "张衡",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501202",
                name: "张天然",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501203",
                name: "马强",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501204",
                name: "满鑫",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501205",
                name: "韩琨",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501206",
                name: "程云飞",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501207",
                name: "张嘉婧",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501208",
                name: "韩可",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501209",
                name: "陈沁玮",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501210",
                name: "陈浩",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501211",
                name: "汪徽",
                department: "软件学院",
                major: "软件工程",
                employment: "自主创业"
            }, {
                id: "120501212",
                name: "李萌",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501213",
                name: "徐婷",
                department: "软件学院",
                major: "软件工程",
                employment: "出国"
            }, {
                id: "120501214",
                name: "刘琪",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501215",
                name: "吕志",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501216",
                name: "王苏云",
                department: "软件学院",
                major: "软件工程",
                employment: "单位就业"
            }, {
                id: "120501217",
                name: "孙文浩",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501218",
                name: "张晨",
                department: "软件学院",
                major: "软件工程",
                employment: "自主创业"
            }, {
                id: "120501219",
                name: "孙伟",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501220",
                name: "罗永明",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501221",
                name: "罗吉",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501222",
                name: "王吉",
                department: "软件学院",
                major: "软件工程",
                employment: "升学"
            }, {
                id: "120501223",
                name: "上官雎尔",
                department: "软件学院",
                major: "软件工程",
                employment: "自主创业"
            }, {
                id: "120501224",
                name: "孙正义",
                department: "软件学院",
                major: "软件工程",
                employment: "自主创业"
            }, {
                id: "120501225",
                name: "马云",
                department: "软件学院",
                major: "软件工程",
                employment: "自主创业"
            }, {
                id: "120501226",
                name: "李迪",
                department: "软件学院",
                major: "软件工程",
                employment: "灵活就业"
            }, {
                id: "120501227",
                name: "吴启",
                department: "软件学院",
                major: "软件工程",
                employment: "灵活就业"
            }, {
                id: "120501228",
                name: "周亚飞",
                department: "软件学院",
                major: "软件工程",
                employment: "未就业"
            }, {
                id: "120501229",
                name: "周兵",
                department: "软件学院",
                major: "软件工程",
                employment: "出国"
            }, {
                id: "120501230",
                name: "李夏露",
                department: "软件学院",
                major: "软件工程",
                employment: "灵活就业"
            }, {
                id: "120501231",
                name: "王衡",
                department: "软件学院",
                major: "软件工程",
                employment: "灵活就业"
            }, {
                id: "120501232",
                name: "汪明然",
                department: "软件学院",
                major: "软件工程",
                employment: "未就业"
            }, {
                id: "120501233",
                name: "程欢欢",
                department: "软件学院",
                major: "软件工程",
                employment: "出国"
            }, {
                id: "120501234",
                name: "张云龙",
                department: "软件学院",
                major: "软件工程",
                employment: "出国"
            }],
            value: '',
            focus: false
        };
    }

    render() {
        const {students} = this.state;
        //TODO: search
        return <div className="student-manager-container">
            <h3 className="section-title">学生信息</h3>
            <SearchInput placeholder="输入学号或学生姓名查询"
                         style={{ width: 300, marginBottom: 10 }}/>
            <StudentList data={students}/>
        </div>
    }
}
