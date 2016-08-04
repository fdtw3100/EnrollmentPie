/**
 * 导航栏
 * Created by ZhuGongpu on 16/4/22.
 */

import React from "react";
import "./index.scss";

export default class Navigation extends React.Component {

    render() {
        return <header className="navigation-container clearfix">
            <div className="navigation-bar">
                <img className="school-logo"
                     src="http://7xtbfn.com2.z0.glb.clouddn.com/buaa_logo.jpg"/>
                <img className="platform-logo"
                     src="http://7xawab.com1.z0.glb.clouddn.com/toU-header-title.png"/>
                <div className="user-info-container">
                    <div className="user-info">
                        <div className="username">汪思翰,你好!</div>
                    </div>
                    <div className="user-actions">
                        <div className="user-action-item">个人中心</div>
                        <div className="user-action-divider"></div>
                        <div className="user-action-item">注销</div>
                    </div>
                </div>
            </div>
        </header>
    }
}
