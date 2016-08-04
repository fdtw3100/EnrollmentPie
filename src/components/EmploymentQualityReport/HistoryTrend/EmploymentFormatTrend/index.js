/**
 * 就业形式变化趋势
 * Created by ZhuGongpu on 16/4/27.
 */
import React from "react";
import Chart, {anotherBarChartOption} from "../../../Charts";
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class FormatTrend extends React.Component {
    render() {
        //TODO: 接入数据
        const data = this.props.data;
        const option = anotherBarChartOption(data);
        return <div>
                  <div style={{display:'inline',float:'right',margin:'-40px 30px'}}>
                      <RadioGroup onChange={this.props.onChange} defaultValue="1"  size="small">
                          <RadioButton value="1">本科</RadioButton>
                          <RadioButton value="2">研究生</RadioButton>
                          <RadioButton value="3">博士</RadioButton>
                      </RadioGroup>
                  </div>
                  <Chart option={option}
                             id="employment-quality-report-employment-format-trend"
                          style={{height:300}} className="employment-quality-report-employment-format-trend"/>
        </div>
    }
}
