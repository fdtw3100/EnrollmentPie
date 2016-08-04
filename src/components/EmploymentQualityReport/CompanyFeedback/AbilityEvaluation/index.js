/**
 * 总体升学状况
 * Created by ZhuGongpu on 16/4/26.
 */
import React from "react";
import Charts, {polarChartOption} from "../../../Charts";
import "../index.scss";

export default class AbilityEvaluation extends React.Component {
    render() {
        //TODO: 接入数据
        const abilityOption = polarChartOption(this.props.option);
        return <Charts id="ability-evaluation-polar-chart" option={abilityOption}
                       className="ability-evaluation-polar-chart"/>
    }
}
