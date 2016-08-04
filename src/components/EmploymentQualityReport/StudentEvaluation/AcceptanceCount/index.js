/**
 * 就业满意度
 * Created by ZhuGongpu on 16/4/27.
 */

import React from "react";
import Charts, {pieChartOption} from "../../../Charts";

export default class AcceptancePieChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.dataSource;
        const option = pieChartOption(data['acceptOfferData']);
        
        return <Charts option={option}
                       id="acceptance-pie-chart"
                       className="acceptance-pie-chart"
                       style={{height: 250}}/>
    }
}
