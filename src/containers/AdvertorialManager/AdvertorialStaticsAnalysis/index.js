/**
 * 软文数据统计
 * Created by LinTongwei on 16/8/5.
 */
import React from "react";
import {Tabs} from "antd";
import EmploymentWhereabouts from "./EmploymentWhereabouts";
import StartupWhereabouts from "./StartupWhereabouts";
import EducationWhereabouts from "./EducationWhereabouts";
import UnemploymentWhereabouts from "./UnemploymentWhereabouts";
import Tooltip from "../../../components/Tooltip";

const TabPane = Tabs.TabPane;

export default class AdvertorialStaticsAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              defaultstate: '1'
        };

        this.helpTooltipContent = [
            '单位就业：签协议就业毕业生、灵活就业中签劳动合同就业毕业生和其它形式（包括定向委培、科研助理、促进就业项目）',
            '自主创业：自主创业数据来自于灵活就业部分；',
            '升学：升学包括国内升学和出国（境）留学。'     
        ];    
    }
    render() {
         console.log("helpTooltipContent: %o",this.helpTooltipContent);
         const tooltip = <Tooltip  content={this.helpTooltipContent}/>;
         return <div>
             <Tabs type="card" tabBarExtraContent={tooltip}>
                 <TabPane tab="单位就业" key="1"><EmploymentWhereabouts /></TabPane>
                 <TabPane tab="自主创业" key="2"><StartupWhereabouts /></TabPane>
                 <TabPane tab="升学" key="3"><EducationWhereabouts /></TabPane>
                 <TabPane tab="未就业" key="4"><UnemploymentWhereabouts /></TabPane>
             </Tabs>
         </div>
    }
}
