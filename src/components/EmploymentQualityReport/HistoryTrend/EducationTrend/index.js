/**
 * 历年升学率变化
 * Created by ZhuGongpu on 16/4/27.
 */
import React from "react";
import Chart, {lineChartOption} from "../../../Charts";

export default class EducationTrend extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.data;
        const option = lineChartOption({
            title: data.title,
            data,
            yAxisLabelFormatter: '{value}%'
         });

        return <Chart option={option}
                      id="employment-quality-report-employment-ratio-trend"
                      className="employment-quality-report-employment-ratio-trend"
                      style={{height: 300}}/>
    }
}
