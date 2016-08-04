/**
 * 就业满意度
 * Created by ZhuGongpu on 16/4/27.
 */

import React from "react";
import Charts, {pieChartOption} from "../../../Charts";

export default class SatisficationPieChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.optionData;
        const option = pieChartOption(data['satisfactionOptionData']);

        return <Charts option={option}
                       id="employment-satisfaction-pie-chart"
                       className="employment-satisfaction-pie-chart"
                       style={{height: 250}}/>
    }
}
