/**
 * 未就业
 * Created by ZhuGongpu on 16/4/26.
 */

import React from 'react';
import UnEmploymentWhereaboutChart from '../../../../components/EmploymentQualityReport/Overall/GraduateWhereabouts/UnEmploymentWhereabouts';

export default class UnemploymentWhereabouts extends React.Component {
    constructor(props) {
        super(props);

        //TODO: 定义数据
        
        //未就业原因
        let motivation = {
            columns: ["拟深造","实习中","求职中","学业问题","自由职业或创业","其它"],
            rows: [{
                name: '本科生毕业比例',
                values: [
                    12, 10,	7,	6,	4,	4
                ]
            }, {
                name: '硕士毕业生比例',
                values: [
                    4,	4,	4,	0,	0,	1
                ]
            }, {
                name: '博士毕业生比例',
                values: [
                    1,	2,	2,	0,	0,	2
                ]
            }]
        };
        //未就业原因Chart 格式控制
        let option = {
            data: motivation,
            showLegend: true,
            showYAxis: true,
            yAxis: {
                axisLabel: {formatter: '{value}'}
            }
        };

      //合并数据
       this.dataSet = {
           'motivation': motivation,
           'option': option
       }
    }

    render() {
        return <div>
          <UnEmploymentWhereaboutChart dataSource={this.dataSet} />
        </div>
    }
}