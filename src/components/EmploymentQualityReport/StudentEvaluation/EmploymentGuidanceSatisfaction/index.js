/**
 * 就业指导服务满意度
 * Created by ZhuGongpu on 16/4/27.
 */
import React from "react";
import Chart, {barChartOption} from "../../../Charts";

export default class SatisfactionBarChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.dataSource;
        const option = barChartOption(data['employmentSatisfactionOption']);

        return <Chart option={option}
                      id="student-evaluation-employment-guidance-satisfaction-bar-chart"
                      className="student-evaluation-employment-guidance-satisfaction-bar-chart"
                      style={{height: data['employmentSatisfactionData'].rows[0].values.length * 30}}/>
    }
}
