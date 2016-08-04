/**
 * 专业对口度
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {barChartOption} from "../../../Charts";

export default class Matchment extends React.Component {
    render() {
        //TODO：接入数据
        const data = this.props.dataSource;
        console.log("data: %o  %o",data, data.majorOptionFomart);
        const option = barChartOption(data.majorOptionFomart);
       
        return <Charts id="quality-evaluation-major-match-bar-chart"
                       className="quality-evaluation-major-match-bar-chart"
                       style={{width: "100%", height: 500}}
                       option={option} />
    }
}
