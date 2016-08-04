/**
 * 求职分析
 * Created by ZhuGongpu on 16/4/27.
 */

import React from "react";
import Charts, {barChartOption} from "../../../Charts";

export default class EmploymentSource extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.optionData;
        const option = barChartOption(data['employmentOptionFomart']);

        return <Charts option={option}
                       id="employment-source-bar-chart"
                       style={{height: data['employmentSource'].columns.length * data['employmentSource'].rows.length * 10}}/>
    }
}
