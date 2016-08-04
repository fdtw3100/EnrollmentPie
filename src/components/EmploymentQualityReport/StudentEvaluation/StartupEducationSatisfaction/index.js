/**
 * 创业教育满意度
 * Created by ZhuGongpu on 16/4/27.
 */
import React from "react";
import Chart, {barChartOption} from "../../../Charts";

export default class SatisfactionBarChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.dataSource;
        const option = barChartOption(data['startUpEducationOption']);

        return <Chart option={option}
                      id="student-evaluation-startup-education-satisfaction-bar-chart"
                      className="student-evaluation-startup-education-satisfaction-bar-chart"
                      style={{height: data['startUpEducationData'].rows[0].values.length * 30}}/>
    }
}
