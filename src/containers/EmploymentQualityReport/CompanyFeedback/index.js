/**
 * 单位反馈
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import CompanyProperty from "../../../components/EmploymentQualityReport/CompanyFeedback/CompanyProperty";
import CompanySatisfaction from "../../../components/EmploymentQualityReport/CompanyFeedback/CompanySatisfaction";
import AbilityEvaluation from "../../../components/EmploymentQualityReport/CompanyFeedback/AbilityEvaluation";
import '../index.scss';
import Tooltip from "../../../components/Tooltip";

export default class CompanyFeedback extends React.Component {
    constructor(props) {
        super(props);
         
        //TODO: 定义数据
        this.propertyChartOption = {
            radius:'70%',
            data: [
                {name:'国防系统内企业 19.23%',value:19.23},
                {name:'其他国有企业 16.03%',value:16.03},
                {name:'其他科研院所 7.05%',value:7.05},
                {name:'民营企业 28.85%',value:28.85},
                {name:'外资企业 16.03%',value:16.03},
                {name:'其他事业单位 1.28%',value:1.28},
                {name:'部队 0.64%',value:0.64},
                {name:'高等院校 1.92%',value:1.92},
                {name:'党政机关 0.64%',value:0.64},
                {name:'国防系统内院所 8.33%',value:8.33}
            ]
        };
        //毕业生能力评价
       this.abilityChartOption = {
            max:5,
            data: [
                {value: 4.7, name: "专业能力"},
                {value: 4.3, name: "计算机应用能力"},
                {value: 3.8, name: "外语能力"},
                {value: 4.3, name: "动手能力"},
                {value: 3.8, name: "自学能力"},
                {value: 4.4, name: "创新能力"},
                {value: 4.5, name: "人际沟通能力"},
                {value: 4.2, name: "团队协作能力"},
                {value: 4, name: "领导能力"},
                {value: 3.6, name: "书面表达能力"},
                {value: 4, name: "组织与协调能力"},
                {value: 3.7, name: "时间管理能力"},
                {value: 4, name: "信息收集能力"},
                {value: 4.2, name: "分析能力"},
                {value: 4.5, name: "问题解决能力"},
                {value: 3.8, name: "情绪管理能力"},
                {value: 4.6, name: "实干与执行能力"},
                {value: 4.2, name: '抗压与抗挫折能力'}
            ]
        };

       //用人单位满意度
       this.satisfaction = {
            columns: ["1分","2分","3分","4分","5分","6分","7分"].reverse(),
            rows: [{values: [0.65, 0.00, 3.92, 3.27, 20.26, 33.99, 37.91].reverse()}]
        };

       //用人单位满意度Chart 
       this.satisfactionChartOption = {
            orientation: "vertical",
            data: this.satisfaction,
            showDataLabel: true,
            labelFormatter: "{c} %",
            showLegend: false,
            showTooltip: false,
            showYAxis: true,
            showXAxis: true,
            xAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

        this.companySatisfactionTooltip = [
            '问卷请用人单位对毕业生从不同能力维度进行 7 分量表评价（1 分为非常不满足工作需要，7 分为非常满足工作需要）'
        ]

        this.abilityEvaluationTooltip = [
            '问卷请用人单位对毕业生从不同能力维度进行 5 分量表评价（1 分为非常不满足工作需要，5 分为非常满足工作需要）'
        ]
   }

  render() {
        return <div className="company-feedback-container">
            <h3 className="section-title">参与调研企业性质</h3><p className="description">北京航空航天大学对每年来学校招聘的企业持续进行问卷调查，2015 年有156 家招聘企业参与了调查，企业性质分布如下：</p>
            <CompanyProperty option={this.propertyChartOption} />
            <h3 className="section-title">用人单位满意度 <Tooltip content={this.companySatisfactionTooltip} /></h3>
            <CompanySatisfaction option={this.satisfactionChartOption} chartColumns={this.satisfaction} />
            <p className="description">统计结果显示，用人单位对毕业生满意度均值为 5.96 分。</p>
            <h3 className="section-title">用人单位对毕业生能力评价 <Tooltip content={this.abilityEvaluationTooltip} /></h3>
            <AbilityEvaluation option={this.abilityChartOption} />
            <p className="description">从统计中可以看出，用人单位对毕业生能力给予了较高的评价，在满足工作需要方面评价最高的为专业能力、问题解决能力和创新能力。</p>
        </div>
    }
}
