/**
 * 企业性质
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {pieChartOption} from "../../../Charts";
import "../index.scss";

export default class CompanyProperty extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.option;
        const propertyOption = pieChartOption(data);
        return <Charts id="company-property-pie-chart" option={propertyOption}
                       className="company-property-pie-chart"/>
    }
}
