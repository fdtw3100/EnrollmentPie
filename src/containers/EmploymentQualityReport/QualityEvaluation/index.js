/**
 * 质量评估
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import SalaryChart from "../../../components/EmploymentQualityReport/QualityEvaluation/SalaryChart";
import MajorMatch from "../../../components/EmploymentQualityReport/QualityEvaluation/MajorMatch";
import SatisfactionPieChart from "../../../components/EmploymentQualityReport/QualityEvaluation/EmploymentSatisfactionPieChart";
import EmploymentSourceBarChart from "../../../components/EmploymentQualityReport/QualityEvaluation/EmploymentSource";
import Tooltip from "../../../components/Tooltip";

export default class QualityEvaluation extends React.Component {
    constructor(props) {
        super(props);

        //定义数据
        //薪酬水平
        let salaryData = {
            columns: ["5万元以下", "5万至10万之间", "10元万至15万元", "15万元至20万元", "20万元以上"],
            rows: [{
                name: '本科生毕业比例',
                values: [
                    7.87,
                    61.42,
                    24.13,
                    5.29,
                    1.29
                ]
            }, {
                name: '硕士毕业生比例',
                values: [
                    0.49,
                    35.41,
                    50.36,
                    8.73,
                    5.01
                ]
            }, {
                name: '博士毕业生比例',
                values: [
                    0,
                    20.34,
                    48.81,
                    18.64,
                    12.20
                ]
            }, {
                name: '总体比例',
                values: [
                    2.9,
                    42.22,
                    41.35,
                    8.84,
                    4.68
                ]
            }]
        };
        //薪酬水平Chart 格式
        let salaryOptionFomart = {
            data: salaryData,
            showLegend: true,
            showYAxis: true,
            yAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

       //专业对口度
        let majorData = {
            columns: ["很不相关", "不相关", "一般", "相关", "很相关"],
            rows: [{
                name: '本科毕业生比例',
                values: [
                    4.81,
                    12.58,
                    25.77,
                    35.27,
                    21.58
                ]
            }, {
                name: '硕士毕业生比例',
                values: [
                    1.04,
                    3.2,
                    17.45,
                    46.28,
                    32.03
                ]
            }, {
                name: '博士毕业生比例',
                values: [
                    0.66,
                    0.33,
                    8.58,
                    46.86,
                    43.56
                ]
            }, {
                name: '总体比例',
                values: [
                    2.29,
                    6.05,
                    19.17,
                    42.57,
                    29.92
                ]
            }
            ]
        };
        //专业对口度Chart格式控制
       let majorOptionFomart = {
            data: majorData,
            showLegend: true,
            showYAxis: true,
            yAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

        //就业满意度Chart
        let satisfactionOptionData = {
            data: [
                {name: "非常满意 80.98%", value: 80.98},
                {name: "一般 4.76%", value: 4.76},
                {name: "比较满意", value: 9.52},
                {name: "非常不满意", value: 4.74}
            ]
        };

       //求职渠道分析
       let employmentSource = {
            columns: ["校园招聘会", "学校发布的招聘会", "学校老师的推荐", "北京大学就业之家招聘会", "政府社会机构组织的招聘会", "各类招聘网站", "报纸杂志发布的招聘", "家庭或社会关系的推荐", "工作实习", "直接向用人单位申请", "其他"].reverse(),
            rows: [{
                name: '总体比例',
                values: [44.90, 7.87, 6.93, 0.77, 1.40, 13.31, 0.13, 7.87, 4.12, 12.24, 0.47].reverse()
            }, {
                name: '博士毕业比例',
                values: [31.89, 11.63, 13.62, 0.33, 2.33, 9.63, 0.00, 3.99, 2.33, 23.26, 1.00].reverse()
            }, {
                name: '硕士生毕业比例',
                values: [57.46, 8.51, 4.49, 0.96, 0.56, 13.08, 0.00, 2.57, 3.61, 8.59, 0.16].reverse()
            }, {
                name: '本科生毕业比例',
                values: [44.90, 7.87, 6.93, 0.77, 1.40, 13.31, 0.13, 7.87, 4.12, 12.24, 0.47].reverse()
            }]
        };
         //求职渠道Chart格式控制
        let employmentOptionFomart = {
            orientation: "vertical",
            data: employmentSource,
            showLegend: true,
            showXAxis: true,
            xAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

        //合并数据
       this.salaryDataSet = {
           'salaryData': salaryData,
           'salaryOptionFomart': salaryOptionFomart,
       }
       this.majorDataSet = {
           'majorData': majorData,
           'majorOptionFomart': majorOptionFomart
       }
       this.satisfactionDataSet = {
           'satisfactionOptionData': satisfactionOptionData,
        }
       this.employmentSourceDataSet = {
           'employmentSource': employmentSource,
           'employmentOptionFomart': employmentOptionFomart
       }

       this.majorMatchTooltip = [
           '毕业生以 5 分量表对最终就业岗位与专业相关性进行评价（1 分为很不相关，5 分为很相关）。'
       ]

       this.satisfactionTooltip = [
          ' 毕业生以 5 分量表对最终就业的满意度进行评价（1 分为很不满意，5 分为很满意）。'
       ]
    }
    render() {
        console.log('QualityEvaluation+majorMatchTooltip: %O', this.majorMatchTooltip)
        return <div className="employment-quality-evaluation-container">
            <h3 className="section-title">薪酬水平</h3>
            <SalaryChart dataSource={this.salaryDataSet} />
            <p className="description">2015年本科毕业生就业薪酬主要集中在5万—10万元期间，硕士与博士生主要集中在10万—15万元期间。</p>
            <h3 className="section-title">专业对口度 <Tooltip content={this.majorMatchTooltip} /></h3>
            <MajorMatch dataSource={this.majorDataSet} />
            <p className="description">2015届毕业生中72.49%比例认为专业很对口。学历越高，就业岗位与专业相关程度越高。</p>
            <h3 className="section-title">就业满意度 <Tooltip content={this.satisfactionTooltip}/></h3>
            <SatisfactionPieChart optionData={this.satisfactionDataSet} />
            <p className="description">2015年届毕业生中90.5%比例认为就业结果满意（比较满意+非常满意）。学历越高，对落实的工作满意度越高。</p>
            <h3 className="section-title">求职渠道分析</h3>
            <EmploymentSourceBarChart optionData={this.employmentSourceDataSet} />
            <p className="description">调查结果显示 2015 届毕
                业生落实工作的就业信息来源渠道排在前三位的分别是:校园招聘会,44.90%的毕业生是通过校园招聘会最终落实工作;各类招聘网站,13.31%的毕业生通过各类招聘网站信息落实工作;直接向用人单位申请,12.24%通过直接向用人单位申请落实就业单位。通过就业中心的就业信息渠道落实工作的毕业生占到被调查毕业生的
                52.77%。</p>
        </div>
    }
}
