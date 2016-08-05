/**
 * 自主创业流向
 * Created by ZhuGongpu on 16/4/26.
 */

import React from "react";
import StartupWhereaboutsChart from '../../../../components/EmploymentQualityReport/Overall/GraduateWhereabouts/StartupWhereabouts';

export default class StartupWhereabouts extends React.Component {
    constructor(props) {
        super(props);

        //TODO: 定义数据

        //毕业生学历
        let overall = {
            columns: ["本科","硕士生","博士生"],
            rows: [
                {values: [70,61,8]}
            ]
        };

        //行业分布
        let category = {
            columns: ["电力、热力、燃气及水生产和供应业", "交通运输、仓储和邮政业", "房地产业", "信息传输、软件和信息技术服务业", "住宿和餐饮业", "批发和零售业", "文化、体育和娱乐业"],
            rows: [{
                values: [6.25, 6.25, 6.25, 12.50, 18.75, 25, 25]
            }]
        };
       
        //创业原因
        let motivation = {
            columns: ["预期可能有更高的收入", "受他人邀请进行创业", "有好的创业项目", "希望通过创业实现个人理想", "对创业充满兴趣、激情"],
            rows: [
                {values: [6.25, 18.75, 18.75, 62.50, 81.25]}
            ]
        };
 
        //毕业生学历Chart 格式控制
        let overallOptionData = {
            orientation: "vertical",
            data: overall,
            showDataLabel: true,
            labelFormatter: "{c}",
            showLegend: false,
            showYAxis: true,
            showTooltip: false,
            xAxis: {
                axisLabel: {formatter: '{value}'}
            }
        };

        //行业分布Chart 格式控制
        let categoryOptionData = {
            orientation: "vertical",
            data: category,
            showDataLabel: true,
            labelFormatter: "{c} %",
            showLegend: false,
            showYAxis: true,
            showTooltip: false,
            xAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

        //创业原因Chart 格式控制
        let motivationOptionData = {
            orientation: 'vertical',
            data: motivation,
            showDataLabel: true,
            labelFormatter: "{c} %",
            showLegend: false,
            showTooltip: false,
            showYAxis: true,
            xAxis: {
                axisLabel: {formatter: '{value}%'}
            }
        };

        //合并数据
        this.dataSet = {
            'overall': overall,
            'category': category,
            'motivation': motivation,
            'overallOptionData': overallOptionData,
            'categoryOptionData': categoryOptionData,
            'motivationOptionData': motivationOptionData
        }
    }
    render() {
        return <div>
         <StartupWhereaboutsChart dataSource={this.dataSet} />
        </div>
    }
}