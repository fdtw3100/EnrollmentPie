/**
 * 就业流向
 * Created by ZhuGongpu on 16/4/26.
 */

import React from "react";
import Charts, {barChartOption, pieChartOption} from "../../../../Charts";
import "./index.scss";

export default class EmploymentWhereaboutsChart extends React.Component {
    render() {
        //TODO：接入数据
        const data = this.props.dataSource;
        const regionOption = pieChartOption(data['regionOption']);
        const companyScaleOption = pieChartOption(data['companyScaleOptionData']);
        const companyTypeOption = pieChartOption(data['companyTypeOptionData']);
        const categoryOption = barChartOption(data['categoryOptionData']);
        
        return <div className="employment-whereabouts-container">
            <h3 className="section-title">就业地区分布</h3>
            <Charts id="employment-region-whereabouts-pie-chart" option={regionOption}
                    className="employment-region-whereabouts-pie-chart"/>
            <p className="description">以北京当地就业为主，其次是西部；</p>
            <h3 className="section-title">就业单位规模</h3>
            <div className="charts-container">
                <Charts id="employment-company-scale-pie-chart" option={companyScaleOption}
                        className="employment-company-scale-pie-chart"/>
            </div>
            <h3 className="section-title">就业单位性质</h3>
            <div className="charts-container">
                <Charts id="employment-company-type-pie-chart" option={companyTypeOption}
                        className="employment-company-type-pie-chart"/>
            </div>
            <p className="description">主要流向单位类型为企业，其中国有企业占比最高，其次为民营企业和三资企业；</p>
            <h3 className="section-title">就业行业分布</h3>
            <Charts id="employment-category-bar-chart" option={categoryOption}
                    className="employment-category-bar-chart"
                    style={{height: data['category'].rows[0].values.length * 30}}/>
            <p className="description">毕业生主要集中在科学研究和技术服务业、制造业、交通运输及仓储邮政业、教育、部队和金融业。</p>
        </div>
    }
}
