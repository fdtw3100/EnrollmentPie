/**
 * Created by ZhuGongpu on 16/4/21.
 */

import React from "react";
import "./index.scss";
import SideBar from "../../components/SideBar";
import NavigationBar from "../../components/NavigationBar";

export default class App extends React.Component {
    render() {
        return <div>
            <NavigationBar />
            <div className="main-wrapper">
                <SideBar location={this.props.location}/>
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

App.contextTypes = {
    router: React.PropTypes.any.isRequired
};
