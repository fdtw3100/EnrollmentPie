/**
 * 自主创业流向
 * Created by ZhuGongpu on 16/4/26.
 */

import React from "react";
import "./index.scss";
import Charts, {barChartOption} from "../../../../Charts";

export default class Whereabouts extends React.Component {
    render() {
        //TODO: 接入数据
         const data = this.props.dataSource;
         const overallOption = barChartOption(data['overallOptionData']);
         const categoryOption = barChartOption(data['categoryOptionData']);
         const motivationOption = barChartOption(data['motivationOptionData']);
         
        return <div className="startup-whereabouts-container">
            <h3 className="section-title">自主创业统计</h3>
            <Charts id="startup-category-bar-chart" option={overallOption}
                    className="startup-category-bar-chart"
                    style={{height: data['category'].rows[0].values.length * 30}}/>
            <h3 className="section-title">自主创业行业分布</h3>
            <Charts id="startup-category-bar-chart" option={categoryOption}
                    className="startup-category-bar-chart"
                    style={{height: data['category'].rows[0].values.length * 30}}/>
            <p className="description">创业行业主要集中在“文化、体育和娱乐业”与“批发和零售业”、“住宿和餐饮业”。</p>
            <h3 className="section-title">自主创业原因调查</h3>
            <Charts id="startup-motivation-bar-chart" option={motivationOption}
                    className="startup-motivation-bar-chart"
                    style={{height: data['motivation'].rows[0].values.length * 30}}/>
            <p className="description">毕业生选择创业的首要</p>
        </div>
    }
}
