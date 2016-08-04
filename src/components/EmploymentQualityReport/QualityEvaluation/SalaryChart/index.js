/**
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {barChartOption} from "../../../Charts";

export default class SalaryChart extends React.Component {
    render() {
     //TODO: 接入数据
     const data = this.props.dataSource;
     const option = barChartOption(data['salaryOptionFomart']);

     return <Charts id="quality-evaluation-salary-bar-chart"
                       className="quality-evaluation-salary-bar-chart"
                       style={{width: "100%", height: 500}}
                       option={option} />
    }
}
