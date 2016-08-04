/**
 * 就业基本情况
 * Created by ZhuGongpu on 16/4/24.
 */

import React from "react";
import {Tabs, Table} from "antd";
import "../index.scss";
import "../../../style/colors.scss";
import StructureAndScaleTab from "./GraduateStructureAndScale";
import EmploymentRatioTab from "./DepartmentEmploymentRatio";
import GraduateWhereaboutsTab from "./GraduateWhereabouts";
const TabPane = Tabs.TabPane;

export default class OverallReport extends React.Component {
    
    render() {
        return <div className="employment-report-overall-container">
            <h2 className="title">就业基本情况</h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="毕业生规模及结构" key="1"><StructureAndScaleTab /></TabPane>
                <TabPane tab="就业率及毕业去向" key="2"><EmploymentRatioTab /></TabPane>
                <TabPane tab="毕业去向分析" key="3"><GraduateWhereaboutsTab /></TabPane>
            </Tabs>
        </div>
    }
}




