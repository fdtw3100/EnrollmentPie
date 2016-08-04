/**
 * 求职分析
 * Created by ZhuGongpu on 16/4/27.
 */

import React from "react";
import Charts, {barChartOption} from "../../../Charts";

export default class JobFindingTime extends React.Component {
    render() {
       //TODO: 接入数据
       const data = this.props.dataSource;
       const option = barChartOption(data['jobFindTimeOption']);


       return <Charts option={option}
                       id="employment-source-bar-chart"
                       style={{height: data['jobFindTimeData'].columns.length * data['jobFindTimeData'].rows.length * 10}}/>
    }
}
