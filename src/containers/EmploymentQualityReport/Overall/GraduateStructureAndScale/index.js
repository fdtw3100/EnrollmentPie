/**
 * 毕业生结构及规模
 * Created by ZhuGongpu on 16/4/25.
 */
import React from "react";
import Charts, {pieChartOption} from "../../../../components/Charts";
import DepartmentEmploymentRatioTable from "../../../../components/EmploymentQualityReport/Overall/GraduateStructureAndScale/DepartmentEmploymentRatioTable";
import "./index.scss";

export default class Tab extends React.Component {
   constructor(props) {
       super(props);
    
        this.genderChartOption = pieChartOption({
                radius: ['50%', '70%'],
                data: [
                    {value: 73.52, name: '男生 73.52%'},
                    {value: 26.48, name: '女生 26.48%'}
                ]
            });

         this.regionChartOption = pieChartOption({
                radius: ['50%', '70%'],
                data: [
                    {value: 33, name: '京津冀 33%'},
                    {value: 67, name: '其他 67%'}
                ]
            });
        
          this.departmentData = [{
                department: "材料科学与工程学院",
                majors: [{
                    major: "材料工程",
                    sum: 57,
                    ratio: "100.00%"
                }, {
                    major: "材料科学与工程",
                    sum: 85,
                    ratio: "98.82%"
                }]
            }, {
                department: "电子信息工程学院",
                majors: [{
                    major: "电子科学与技术",
                    sum: 39,
                    ratio: "100.0%"
                }, {
                    major: "电子与通信工程",
                    sum: 81,
                    ratio: "100.0%"
                }, {
                    major: "光学工程",
                    sum: 10,
                    ratio: "100.0%"
                }, {
                    major: "集成电路工程",
                    sum: 10,
                    ratio: "100.0%"
                }, {
                    major: "交通信息工程及控制",
                    sum: 15,
                    ratio: "100.0%"
                }, {
                    major: "信息与通信工程",
                    sum: 62,
                    ratio: "100.0%"
                }]
            }];

            this.tabelColums = [{
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
                key: 'major'
             }, {
                title: '总人数',
                dataIndex: 'sum',
                key: 'sum'
             }, {
                title: '就业率',
                dataIndex: 'ratio',
                key: 'ratio'
             }];
  }

 getMajorAccount(department) {
        return this.departmentData.find((item) => item.department == department).majors.length;//TODO:
    }

 render() {
        return <div className="graduate-employment-structure-container">
            <h3 className="section-title">总体规模</h3>
            <div className="charts-container">
                <Charts id="gender-pie-chart" option={this.genderChartOption} className="gender-pie-chart"/>
                <Charts id="region-pie-chart" option={this.regionChartOption} className="region-pie-chart"/>
            </div>
            <div>
                <p className="description">北京航空航天大学 2015 届毕业生总数为 6926 人,其中男生 5092 人,占毕业生总数的 73.52%,女生 1834 人,占毕业生总数的
                    26.48%。本科毕业生 3582
                    人,占全体毕业生人数的51.72%,硕士毕业生 2808 人,占全体毕业生人数的 40.54%,博士毕业生 536 人,占全体毕业生人数的 7.74%。</p>
            </div>
            <h3 className="section-title">院系及专业结构</h3>
            <DepartmentEmploymentRatioTable data={this.departmentData} columns={this.tabelColums}/>
        </div>
    }
}
