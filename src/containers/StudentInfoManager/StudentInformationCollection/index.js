/**
 * 学生信息采集
 * Created by ZhuGongpu on 16/4/28.
 */

import React from "react";
import {Button} from "antd";
import GraduatorInformation from "./GraduatorInformation";
import EmploymentChoice from "./EmploymentChoice";
import SignJobAgreement from "./SignJobAgreement"
import "./index.scss";

export default class StudentInfomationCollection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="student-manager-container table-border">
            <h1 className="table-title">毕业去向采集表</h1>
            <span>修改基本信息</span>
            <div className="details-container">
                <h3 className="section-title title-padding">基本信息</h3>
                <GraduatorInformation />
            </div>
            <div className="details-container">
                <h3 className="section-title title-padding">就业去向</h3>
                <EmploymentChoice />
            </div>
            <div className="details-container">
                <h2>如果学生选择签就业协议(劳务合同)需要回答以下问题;</h2>
                <SignJobAgreement />
            </div>
        </div>
    }
}
