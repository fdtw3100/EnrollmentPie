/**
 * 用人单位满意度
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {barChartOption} from "../../../Charts";
import "../index.scss";

export default class CompanyProperty extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.option;
        const satisfactionOption = barChartOption(data);
        const chartColumns = this.props.chartColumns;

        return <Charts id="company-satisfaction-bar-chart" option={satisfactionOption}
                    className="company-satisfaction-bar-chart"
                    style={{height:chartColumns.rows[0].values.length * 40}}/>
    }
}
