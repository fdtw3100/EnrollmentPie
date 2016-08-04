/**
 * Select选项处理
 */

import React from "react";
import {Select} from "antd";

const Option = Select.Option;

export default class SelectOption extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <Select style={{ width: 180, marginLeft: 30 }} placeholder={this.props.placeholderTitle}>
                {
                    data.map((item) =>
                        <Option key={item.key} value={item.key}>{item.value}</Option>
                    )
                }
            </Select>
        )
    }
}
