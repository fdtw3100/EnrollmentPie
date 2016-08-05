/**
 * 就业流向
 * Created by ZhuGongpu on 16/4/26.
 */

import React from 'react';
import EmploymentWhereaboutsChart from '../../../../components/EmploymentQualityReport/Overall/GraduateWhereabouts/EmploymentWhereabouts';

export default class employmentWhereabouts extends React.Component {
    constructor(props){
        super(props);

        //TODO: 定义数据
        
        //就业地区分布
        let category = {
            columns: ["科学研究和技术服务", "信息传输、软件和信息技术服务", "制造业", "交通运输、仓储和邮政业", "教育", "部队", "金融业", "公共管理、社会保障和社会组织", "电力、热力、燃气及水生产和供应业", "文化、体育和娱乐业", "建筑业", "批发和零售业", "租赁和商务服务", "居民服务、修理和其他服务行业", "卫生和社会工作", "其他"].reverse(),
            rows: [{
                values: [1145, 873, 622, 448, 225, 223, 218, 159, 11, 75, 63, 58, 52, 30, 27, 65].reverse()
            }]
        };

        //就业地区流向
        let regionOption = {
            radius: '64%',
            data: [//TODO: 接入数据
                {value: 2476, name: "北京, 2476"},
                {value: 428, name: '西部, 428'},
                {value: 315, name: '华南, 315'},
                {value: 280, name: '华东(除上海), 280'},
                {value: 273, name: '中部, 273'},
                {value: 268, name: '上海, 268'},
                {value: 236, name: '华北(除北京), 236'},
                {value: 137, name: '东北, 137'},
                {value: 11, name: '海外, 11'}
            ]
        };

        //公司规模
        let companyScaleOptionData = {
            radius: '64%',
            data: [//TODO: 接入数据, 并加入`\n`,防止溢出
                {value: 51.55, name: "500-2000人,\n 51.55%"},
                {value: 20.83, name: '50-200人,\n 20.83%'},
                {value: 12.23, name: '200-500人,\n 12.23%'},
                {value: 8.76, name: '2000人以上,\n 8.76%'},
                {value: 4.63, name: '20-50人,\n 4.63%'},
                {value: 2, name: '20人以下,\n 2%'}
            ]
        };

        //公司类型
        let companyTypeOptionData = {
            radius: '64%',
            data: [//TODO: 接入数据, 并加入`\n`,防止溢出
                {value: 1908, name: "国有企业\n 2476"},
                {value: 575, name: '三资企业\n 575'},
                {value: 781, name: '民营企业\n 781'},
                {value: 223, name: '部队\n 223'},
                {value: 6, name: '大学生村官\n 6'},
                {value: 97, name: '机关\n 97'},
                {value: 480, name: '科研设计\n 480'},
                {value: 191, name: '高等教育\n 191'},
                {value: 32, name: '中初教育\n 32'},
                {value: 7, name: '医疗卫生\n 7'},
                {value: 124, name: '其他事业\n 124'}
            ]
        };
        
        //行业流向Chart格式控制
       let categoryOptionData = {
            orientation: "vertical",
            data: category,
            showDataLabel: true,
            showLegend: false,
            showTooltip: false,
            showYAxis: true,
            showXAxis: false
        };

      //TODO: 合并数据
       this.dataSet = {
           'category': category,
           'regionOption': regionOption,
           'companyScaleOptionData': companyScaleOptionData,
           'companyTypeOptionData': companyTypeOptionData,
           'categoryOptionData': categoryOptionData
       }
  }
 render(){
       return <div>
          <EmploymentWhereaboutsChart dataSource={this.dataSet}/>
       </div>
   }

}

