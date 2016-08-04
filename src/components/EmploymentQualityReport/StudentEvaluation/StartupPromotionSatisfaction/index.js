/**
 * 创业促进活动满意度
 * Created by ZhuGongpu on 16/4/27.
 */
import React from "react";
import Chart, {barChartOption} from "../../../Charts";

export default class SatisfactionBarChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.dataSource;
        const option = barChartOption(data['startUpPromoteOption']);
        
        return <Chart option={option}
                      id="student-evaluation-startup-promotion-satisfaction-bar-chart"
                      className="student-evaluation-startup-promotion-satisfaction-bar-chart"
                      style={{height: data['startUpPromoteData'].rows[0].values.length * 30}}/>
    }
}
