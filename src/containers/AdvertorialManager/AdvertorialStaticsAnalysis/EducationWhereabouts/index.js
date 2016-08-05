import React from 'react';
import EducationWhereaboutsChart from '../../../../components/EmploymentQualityReport/Overall/GraduateWhereabouts/EducationWhereabouts';

export default class EducationWhereabouts extends React.Component {
    constructor(props) {
        super(props);

       //TODO: 定义数据

       //总体分布
        let overallChartData = {
            data: [
                {value: 43, name: "国内升学 43%"},
                {value: 16, name: "出国（境）升学 16%"},
                {value: 41, name: "未升学 41%"}
           ]
        };

        //出国留学国家（地区）分布
        let overseaChartData = {
            data: [
                {value: 57, name: "美国 314人 57%"},
                {value: 14, name: "英国 78人 14%"},
                {value: 7, name: "德国 37人 7%"},
                {value: 7, name: "澳大利亚 37人 7%"},
                {value: 4, name: "中国香港 25人 4%"},
                {value: 3, name: "法国 15人 3%"},
                {value: 3, name: "新加坡 15人 3%"},
                {value: 2, name: "日本 11人 2%"},
                {value: 2, name: "加拿大 11人 2%"},
                {value: 1, name: "荷兰 5人 1%"}
            ]
         };

        //升学原因
        let motivation = {
            columns: ["其他", "提升能力", "增加择业资本,站在更高的求职点", "对专业感兴趣,深入学习"],
            rows: [{values: [4.67, 10.05, 33.33, 42.86]}]
        };

        //升学满意度
        let satisfaction = {
            columns: ["非常满意", "比较满意", "一般", "非常不满意"].reverse(),
            rows: [{values: [80.95, 9.52, 4.77, 4.76].reverse()}]
        };
         
        //升学原因Chart 格式控制
        let motivationOption = {
            orientation: "vertical",
            data: motivation,
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
  
        //升学满意度Chart 格式控制
        let satisfactionOption = {
            orientation: "vertical",
            data: satisfaction,
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
        
        //TODO: 合并数据
        this.dataSet = {
            'overallChartData': overallChartData,
            'overseaChartData': overseaChartData,
            'motivation': motivation,
            'satisfaction': satisfaction,
            'motivationOption': motivationOption,
            'satisfactionOption': satisfactionOption
        }
    }
    render () {
       return <div>
            <EducationWhereaboutsChart dataSource={this.dataSet} />
        </div>
    }

}