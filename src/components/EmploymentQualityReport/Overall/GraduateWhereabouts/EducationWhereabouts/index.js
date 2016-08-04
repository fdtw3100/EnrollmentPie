/**
 * 升学流向
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {barChartOption,pieChartOption} from "../../../../Charts";
import "./index.scss";

export default class EducationWhereaboutsChart extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.dataSource;
        const overallOption = pieChartOption(data['overallChartData']);
        const overseaOption = pieChartOption(data['overseaChartData']);
        const motivationOption = barChartOption(data['motivationOption']);
        const satisfactionOption = barChartOption(data['satisfactionOption']);

        return <div className="education-whereabouts-container">
            <h3 className="section-title">升学状况</h3>
            <Charts id="education-overall-pie-chart" option={overallOption}
                    className="education-overall-pie-chart"/>
            <h3 className="section-title">出国留学国家（地区）分布</h3>
            <Charts id="education-oversea-pie-chart" option={overseaOption}
                    className="education-oversea-pie-chart"/>
            <h3 className="section-title">升学原因</h3>
            <Charts id="education-motivation-bar-chart" option={motivationOption}
                    className="education-motivation-bar-chart"
                    style={{height: data['motivation'].rows[0].values.length * 40}}/>
            <p className="description">升学原因主要是对专业感兴趣，想深入学习。</p>
            <h3 className="section-title">升学满意度</h3>
            <Charts id="education-satisfaction-bar-chart" option={satisfactionOption}
                    className="education-satisfaction-bar-chart"
                    style={{height: data['satisfaction'].rows[0].values.length * 40}}/>
            <p className="description">升学的毕业生中九成以上的人员对升学结果满意。</p>
        </div>
    }
}
