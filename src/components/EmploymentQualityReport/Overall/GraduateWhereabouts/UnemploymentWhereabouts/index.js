/**
 * 未就业
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {barChartOption} from "../../../../Charts";

export default class UnemploymentWhereaboutChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.dataSource;
        const option = barChartOption(data['option']);
        
        return <div className="unemployment-whereabouts-container">
            <h3 className="section-title">未就业原因</h3>
            <Charts id="unemployment-whereabouts-bar-chart"
                       className="unemployment-whereabouts-bar-chart"
                       style={{width: "100%", height: 500}}
                       option={option}/>
        </div>
    }
}
