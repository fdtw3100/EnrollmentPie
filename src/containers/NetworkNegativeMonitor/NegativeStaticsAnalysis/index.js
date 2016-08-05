/**
 * 监测网络负面数据
 * Created by LinTongwei on 16/8/5.
 */
import React from "react";
import {Tabs} from "antd";
import EmploymentRatioTrend from "../../../components/EmploymentQualityReport/HistoryTrend/EmploymentRatioTrend";

const TabPane = Tabs.TabPane;

export default class NegativeStaticsAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              defaultstate: '1'
        };

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
    }
    render() {
         return <div>
             <Tabs type="card">
                 <TabPane tab="单位就业" key="1"><EmploymentRatioTrend data={this.educationRadioData} /></TabPane>
             </Tabs>
         </div>
    }
}
