/**
 * 就业基本情况
 * Created by ZhuGongpu on 16/4/24.
 */

import React from "react";
import {Tabs, Table} from "antd";
import "./index.scss";
import "../../../style/colors.scss";
import EffectStatisticsTab from "./EffectStatistics";
import EffectAnalysisTab from "./EffectAnalysis";
const TabPane = Tabs.TabPane;

export default class EffectFeedback extends React.Component {

    render() {
        return <div className="employment-report-overall-container">
            <h2 className="title">效果反馈</h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="效果统计" key="1"><EffectStatisticsTab /></TabPane>
                <TabPane tab="效果分析" key="2"><EffectAnalysisTab /></TabPane>
            </Tabs>
        </div>
    }
}
