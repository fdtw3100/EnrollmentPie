/**
 * 就业率及毕业去向
 * Created by ZhuGongpu on 16/4/25.
 */

import React from "react";
import Charts, {pieChartOption} from "../../../../components/Charts";
import DepartmentEmploymentWhereaboutsTable from "../../../../components/EmploymentQualityReport/Overall/DepartmentEmploymentRatio/DepartmentEmploymentWhereaboutsTable";
import "./index.scss";
import Tooltip from "../../../../components/Tooltip";

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        
        //TODO: 定义数据
        //总体毕业去向
        this.whereaboutsPieChartData = ({
           tooltip: true,
            data: [
                {value: 46, name: "签协议就业 46%", tip: "签协议就业人数为3166人，占总人数46%。"},
                {value: 14, name: "灵活就业 14%", tip: "灵活就业人数为982人，占总人数14%。"},
                {value: 35, name: "升学 35%", tip: "升学人数为2439人，占总人数35%。"},
                {value: 4, name: "其它形式 4%", tip: "其他形式人数为276人，占总人数4%。"},
                {value: 1, name: "未就业 1%", tip: "未就业人数为63人，占总人数1%。"}
            ]
        });
        
        //院系,专业就业率表
        this.whereaboutsTabColumns = [{
                title: '院系名称',
                dataIndex: 'department',
                key: 'department',
                render: (text, record, index) => {
                    return {
                        children: text,
                        props: {
                            rowSpan: text ? this.getMajorAccount(text) : 0
                        }
                    };
                 }
              }, {
                title: '专业',
                dataIndex: 'major',
                key: 'major',
                render: (text, record, index) => {
                    return {
                        children: text,
                        props: {
                            colSpan: record.majorDescription ? 1 : 2
                        }
                     }
                  }
              }, {
                title: "专业方向",
                dataIndex: "majorDescription",
                key: 'majorDescription',
                render: (text, record, index) => {
                    return {
                        children: text,
                        props: {
                            colSpan: text ? 1 : 0
                        }
                     }
                  }
             }, {
                title: '总人数',
                dataIndex: 'sum',
                key: 'sum'
             }, {
                title: '签协议就业',
                dataIndex: 'employed',
                key: 'employed'
             }, {
                title: '灵活就业',
                dataIndex: 'flexible',
                key: 'flexible'
             }, {
                title: "升学",
                dataIndex: "education",
                key: "education"
             }, {
                title: "其他",
                dataIndex: "others",
                key: "others"
             }, {
                title: '未就业',
                dataIndex: 'unemployed',
                key: 'unemployed'
         }];

        this.whereaboutsTabdata = [{
            department: "材料科学与工程学院",
            majors: [{
                major: "材料类",
                majorDescription: "材料科学与工程、纳米材料与技术",
                sum: 142,
                employed: 12, //签就业协议
                flexible: 21, //灵活就业
                education: 107,//升学
                others: 2,//其他
                unemployed: 0 //未就业
             }]
          }, {
            department: "自动化科学与电气工程学院",
            majors: [{
                major: "电气类",
                majorDescription: "电气工程及自动化",
                sum: 156,
                employed: 17, //签就业协议
                flexible: 24, //灵活就业
                education: 110,//升学
                others: 5,//其他
                unemployed: 0//未就业
            }, {
                major: "自动化类",
                majorDescription: "自动化",
                sum: 132,
                employed: 14, //签就业协议
                flexible: 19, //灵活就业
                education: 97,//升学
                others: 2,//其他
                unemployed: 0 //未就业
            }, {
                major: "小计",
                // majorDescription: "自动化",
                sum: 288,
                employed: 31, //签就业协议
                flexible: 43, //灵活就业
                education: 207,//升学
                others: 7,//其他
                unemployed: 0//未就业
            }]
        }];

        this.whereaboutsChartTooltip = [
            '升学率 =（出国（境）留学生人数+国内升学毕业生人数）/ 毕业生总人数 x 100% ',
            '协议就业率 =（与用人单位签订三方协议就业毕业生人数）x 100%',
            '灵活就业率 =（与用人单位直接签订劳动合同就业（没签三方协议）毕业生人数 + 自主创业的毕业生人数）x 100%',
            '其它 =（定向委培人数 + 参加促进就业项目毕业生人数）x 100%'
        ]
    }

   getMajorAccount(department) {
        return this.whereaboutsTabdata.find((item) => item.department == department).majors.length;//TODO:
      }
      
   render() {
        const whereaboutsChartOption = pieChartOption(this.whereaboutsPieChartData);
        return <div className="graduate-employment-ratio-container">
            <h3 className="section-title">总体毕业去向 <Tooltip content={this.whereaboutsChartTooltip}/></h3>
            <div className="chart-container">
                <Charts id="graduate-whereabouts-ratio-chart" 
                        option={whereaboutsChartOption}
                        className="graduate-whereabouts-ratio-chart"/>
            </div>
            <p className="description">截止2015年10月31日，北京航空航天大学6926名毕业生（包括本科、硕士、博士）毕业主要去向为签协议就业、灵活就业与升学。</p>
            <h3 className="section-title">各院系、专业就业率</h3>
            <DepartmentEmploymentWhereaboutsTable data={this.whereaboutsTabdata} tabColumns={this.whereaboutsTabColumns} />
            <p className="description">各系就业率均在96%以上。</p>
        </div>
    }
}
