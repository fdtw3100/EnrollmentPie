/**
*就业形式变化趋势
*/

import React from 'react';
import FormatTrend from '../../../../components/EmploymentQualityReport/HistoryTrend/EmploymentFormatTrend';


export default class EmploymentFormatTrend extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          defaultstage: '1'
      }

      //定义数据
      let data1 = {
          columns: ["2013年", "2014年", "2015年"],
          rows: [{
              name: '签协议就业',
              values: [23.45, 23.24, 23.17]
          }, {
              name: '灵活就业',
              values: [15.17, 14.79, 15.03]
          }, {
              name: '升学',
              values: [59.43, 59.74, 59.76]
          }, {
              name: '其它形式',
              values: [1.95, 2.22, 2.03]
          }]
      };

      let data2 = {
          columns: ["2013年", "2014年", "2015年"],
          rows: [{
              name: '签协议就业',
              values: [70.35, 70.35, 70.34]
          }, {
              name: '灵活就业',
              values: [16.05, 15.87, 15.78]
          }, {
              name: '升学',
              values: [7.88, 7.94, 8.01]
          }, {
              name: '其它形式',
              values: [5.71, 5.84, 5.87]
          }]
      };

      let data3 = {
          columns: ["2013年", "2014年", "2015年"],
          rows: [{
              name: '签协议就业',
              values: [72.48, 72.31, 71.83]
          }, {
              name: '灵活就业',
              values: [1.36, 1.54, 1.70]
          }, {
              name: '升学',
              values: [18.80, 18.85, 18.90]
          }, {
              name: '其它形式',
              values: [7.36, 7.31, 7.56]
          }]
       };

      this.dataSet = {
        '1': data1,
        '2': data2,
        '3': data3
      }
    }

    changeStage(e) {
        this.setState({defaultstage:e.target.value});
    }

    render() {
      return <div>
        <FormatTrend data={this.dataSet[this.state.defaultstage]} onChange={this.changeStage.bind(this)} />
      </div>
    }
}
