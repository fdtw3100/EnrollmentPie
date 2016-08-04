/**
 *单选事件处理
 */

import React from "React";
import {Radio} from "antd";


export default class RadioGroup extends React.Component {
   render() {
       const {data,changeStage,defaultValue} = this.props;
       return (
           <Radio.Group onChange={this.props.changeStage} value={this.props.defaultValue}>
                {
                    data.map((radioItem, index) =>
                        <Radio className="occupation-choice-item item-margin-bottom-10"
                               key={radioItem}
                               value={index}>
                               {radioItem}
                        </Radio>
                    )
                }
            </Radio.Group>
       )
   }

}
