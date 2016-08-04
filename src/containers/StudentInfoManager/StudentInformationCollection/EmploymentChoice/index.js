/**
 * 就业去向
 * Created by ShayangLan on 2016/7/14.
 */
import React from "react";
import {Radio} from "antd";
import RadioGroup from "../../../../components/StudentManager/RadioGroup";
import "../../../EmploymentQualityReport/index.scss";
import "../../../../style/colors.scss";
import "./index.scss";


export default class OccupationOption extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
         defaultstage: '1'
       };

       this.jobAreaOptions = ['出国境', '签劳动合同', '国内升学(非定向委培)', '灵活就业', '国内升学（定向委培）',
           '自主创业', '签就业协议', '未就业'];
   }
   onChange(e) {
       this.setState({
           defaultstage: e.target.value,
       });
   }

    render() {
          return <div className="occupation-choices">
              <RadioGroup data={this.jobAreaOptions} changeStage={this.onChange.bind(this)}
                          defaultValue={this.state.defaultstage} />
          </div>
        }
}
