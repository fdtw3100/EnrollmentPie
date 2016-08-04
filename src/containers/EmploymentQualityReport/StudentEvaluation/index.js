/**
 * 学生评价
 * Created by ZhuGongpu on 16/4/27.
 */
import React from "react";
import AcceptanceCount from "../../../components/EmploymentQualityReport/StudentEvaluation/AcceptanceCount";
import JobFindingTim from "../../../components/EmploymentQualityReport/StudentEvaluation/JobFindingTime";
import EmploymentGuidanceSatisfactionChart from "../../../components/EmploymentQualityReport/StudentEvaluation/EmploymentGuidanceSatisfaction";
import StartupPromotionSatisfaction from "../../../components/EmploymentQualityReport/StudentEvaluation/StartupPromotionSatisfaction";
import StartupEducationSatisfaction from "../../../components/EmploymentQualityReport/StudentEvaluation/StartupEducationSatisfaction";

export default class StudentEvaluation extends React.Component {
    constructor(props) {
        super(props);

        //定义数据
        //收到的Offer
        let acceptOfferData = {
            data: [
                {name: "收到 1个录用通知 26.39%", value: 26.39},
                {name: "收到 2个录用通知 21.44%", value: 21.44},
                {name: "收到 3个录用通知 22.59%", value: 22.59},
                {name: "收到 4个录用通知 10.32%", value: 10.32},
                {name: "收到 5个录用通知 10.57%", value: 10.57},
                {name: "收到 6个至10个录用通知 7.89%", value: 7.89},
                {name: "收到 10个以上录用通知 0.81%", value: 0.81}
            ]
        };

        //JobFindingTime
        let jobFindTimeData = {
            columns: [
                "1个月以内",
                "1个月至2个月",
                "2个月至3个月",
                "3个月至4个月",
                "4个月至5个月",
                "5个月至6个月",
                "6个月至7个月",
                "10个月以上"].reverse(),
            rows: [{
                name: '总体比例',
                values: [17.14,25.69,31.20,9.88,5.09,7.38,2.67,1.06].reverse()
            }, {
                name: '博士毕业比例',
                values: [31.44,22.65,24.87,5.07,4.83,7.30,2.60,1.24].reverse()
            }, {
                name: '硕士生毕业比例',
                values: [10.02,30.29,36.30,13.70,4.65,4.01,0.56,0.48,].reverse()
            }, {
                name: '本科生毕业比例',
                values: [7.59,14.85,27.06,6.39,7.59,21.45,11.55,2.79,].reverse()
            }]
        };
        //JobFindingTime Chart格式控制
        let jobFindTimeOption = {
            orientation: "vertical",
            data: jobFindTimeData,
            showLegend: true,
            showXAxis: true,
            xAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

        //就业指导服务满意度
        let employmentSatisfactionData = {
                columns: ["职业咨询与辅导", "就业指导课", "就业实习、实践", "就业手续办理", "校园招聘会", "就业帮扶与推荐", "招聘信息发布"],
                rows: [{
                    values: [98.36, 98.26, 98.25, 97.87, 97.69, 97.68, 97.68]
                }]
            };
        //就业指导服务满意度 Chart格式控制
        let employmentSatisfactionOption = {
                data: employmentSatisfactionData,
                orientation: 'vertical',
                showTooltip: false,
                showDataLabel: true,
                labelFormatter: "{c} %"
            };

        //创业教育满意度
        let startUpEducationData = {
                columns: ["创业相关课程", "创业实训与模拟", "创业协会", "创新创业大赛", "创业项目孵化"],
                rows: [{
                    values: [99.16, 99.02, 98.92, 98.59]
                }]
            };
        //创业教育满意度Chart
        let startUpEducationOption = {
                data: startUpEducationData,
                orientation: 'vertical',
                showTooltip: false,
                showDataLabel: true,
                labelFormatter: "{c} %"
            };

        //创业促进活动满意度
        let startUpPromoteData = {
            columns: ["社会实践活动", "假期实习、课外兼职", "创新创业课程", "创新创业大赛", "模拟创业活动", "学校和政府提供的创业培训和咨询", "学生社团活动"].reverse(),
            rows: [{
                values: [62.25, 37.50, 37.50, 31.25, 25.00, 12.50, 6.25].reverse()
            }]
        };
        let startUpPromoteOption = {
            data: startUpPromoteData,
            orientation: 'vertical',
            showTooltip: false,
            showDataLabel: true,
            labelFormatter: "{c} %"
        };

        //合并数据
        this.acceptOfferDataSet = {
           'acceptOfferData': acceptOfferData
        }

        this.jobFindTimeDataSet = {
            'jobFindTimeData': jobFindTimeData,
            'jobFindTimeOption': jobFindTimeOption
        }

        this.employmentSatisfactionDataSet = {
            'employmentSatisfactionData': employmentSatisfactionData,
            'employmentSatisfactionOption': employmentSatisfactionOption
        }

        this.startUpEducationDataSet = {
            'startUpEducationData': startUpEducationData,
            'startUpEducationOption': startUpEducationOption
        }

        this.startUpPromoteDataSet = {
            'startUpPromoteData': startUpPromoteData,
            'startUpPromoteOption': startUpPromoteOption
        }
    }
    render() {
        return <div className="student-evaluation-container">
            <h3 className="section-title">求职过程中收到的录取通知数</h3>
            <AcceptanceCount dataSource={this.acceptOfferDataSet} />
            <p className="description">2346 名毕业生参与调研，毕业生在求职过程中平均收到录用通知 3 个，其中本科毕业生平均收到录用通知 2.56 个，硕士毕业生 3.33 个，博士毕业生平均收到录用通知 2.61 个。</p>
            <h3 className="section-title">求职过程时间</h3>
            <JobFindingTim dataSource={this.jobFindTimeDataSet} />
            <p className="description">从开始求职到最终落实工作，毕业生平均求职时间为2.99个月，其中本科、硕士、博士的平均求职时间分别为2.69个月、2.85个月、4.42个月。</p>
            <h3 className="section-title">就业指导服务满意度</h3>
            <EmploymentGuidanceSatisfactionChart dataSource={this.employmentSatisfactionDataSet} />
            <p className="description">毕业对母校各项就业指导服务满意度均在97%以上，其中满意度最高的三方面职业咨询与辅导、就业指导课、就业实习/实践。</p>
            <h3 className="section-title">创业教育满意度</h3>
            <StartupEducationSatisfaction dataSource={this.startUpEducationDataSet} />
            <p className="description">毕业生对各项创业教育/指导服务的参与度均在87%以上，其中创业相关课程的参与度最高。</p>
            <h3 className="section-title">创业促进活动满意度</h3>
            <StartupPromotionSatisfaction dataSource={this.startUpPromoteDataSet} />
            <p className="description">对创业有促进作用的在学校活动选择人数最多的是社会实践活动。</p>
        </div>
    }
}
