/**
 * 历年变化
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import EmploymentRatioTrend from "../../../components/EmploymentQualityReport/HistoryTrend/EmploymentRatioTrend";
import EmploymentFormatTrend from "./EmploymentFormatTrend";
import EducationTrend from "../../../components/EmploymentQualityReport/HistoryTrend/EducationTrend";

export default class QualityEvaluation extends React.Component {
    constructor(props) {
        super(props);

        // 就业率变化趋势
        this.educationRadioData = {
            columns: ["2013年", "2014年", "2015年"],
            rows: [{
                name: '本科生毕业比例',
                values: [98.23, 98.26, 98.80]
            }, {
                name: '硕士毕业生比例',
                values: [99.25, 99.12, 99.54]
            }, {
                name: '博士毕业生比例',
                values: [99.55, 97.63, 98.68]
            }]
        };

        // 历年升学率
        this.educationtrendData = {
            columns: ["2011年","2012年","2013年", "2014年", "2015年"],
            rows: [{
                name: '总升学率',
                values: [54.95, 59.40, 57.77, 61.50, 59.05]
            }, {
                name: '国内升学率',
                values: [44.84, 46.54, 42.11, 45.85, 43.05]
            }, {
                name: '出国（境）升学率',
                values: [10.11, 12.86, 15.66, 15.65, 16.00]
            }]
        };
        
    }
    render() {
        return <div className="employment-quality-history-trend-container">
            <h3 className="section-title">就业率变化趋势</h3>
            <EmploymentRatioTrend data={this.educationRadioData} />
            <p className="description">2013-2015年本科生、硕士生、博士生的就业率均保持在97%以上。</p>
            <h3 className="section-title">就业形式变化趋势</h3>
            <EmploymentFormatTrend />
            <p className="description">近三年本科毕业生以升学为主，接近60%。近三年硕士及博士毕业生以签协议就业为主，超过70%。</p>
            <h3 className="section-title">历年升学率变化</h3>
            <EducationTrend data={this.educationtrendData}/>
        </div>
    }
}
