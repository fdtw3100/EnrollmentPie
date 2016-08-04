/**
 * 帮助信息
 *
 * Created by ZhuGongpu on 16/5/11.
 */
import React from "react";
import {Popover, Button, Icon} from "antd";
import "./index.scss";

export default class Help extends React.Component {
    render() {
        //TODO: 接入数据
        const toolipContent = this.props.content;
        return (
            <Popover placement="bottom" content={
                  <div>  
                     { toolipContent.map((contentItem) => <p>{contentItem}</p>) }
                  </div>
                 }>
                  <Icon className="tooltip-icon" type="question-circle-o"/>
            </Popover>
        )
    }
}

