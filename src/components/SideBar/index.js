/**
 * Created by LinTongwei on 16/8/5.
 */

import React from "react";
import {Menu, Icon} from "antd";
import {Link} from "react-router";
import "./index.scss";
import {PlainRoutes, TreeRoutes} from "../../router/routes";
const SubMenu = Menu.SubMenu;


export default class SideBar extends React.Component {

    componentWillMount() {
        this.defaultOpenKeys = [
            TreeRoutes.user.enrollment_plan.index,
            TreeRoutes.user.advertorial_manager.index,
            TreeRoutes.user.advertorial_review.index,
            TreeRoutes.user.advertorial_propagation.index,
            TreeRoutes.user.network_negative_monitor.index
        ].filter((key) => new RegExp(key).test(this.props.location.pathname));
}

    render() {
        const {
            enrollment_plan,
            advertorial_manager,
            advertorial_review,
            advertorial_propagation,
            network_negative_monitor
        } = PlainRoutes.user;

        return <aside className="side-bar-container clearfix">
            <Menu
                defaultOpenKeys={this.defaultOpenKeys}
                selectedKeys={[this.props.location.pathname]}
                mode="inline">
                <SubMenu key={TreeRoutes.user.enrollment_plan.index}
                         title={<span><Icon type="user" /><span>招生计划</span></span>}>
                    <Menu.Item key={enrollment_plan.competitor_analysis}>
                        <Link to={enrollment_plan.competitor_analysis}>竞品分析</Link>
                    </Menu.Item>
                    <Menu.Item key={enrollment_plan.strategy_design}>
                        <Link to={enrollment_plan.strategy_design}>策略制定</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.user.advertorial_manager.index}
                         title={<span><Icon type="setting" /><span>软文管理</span></span>}>
                    <Menu.Item key={advertorial_manager.advertorial_list}>
                        <Link to={advertorial_manager.advertorial_list}>软文列表</Link>
                    </Menu.Item>
                    <Menu.Item key={advertorial_manager.new_advertorial}>
                        <Link to={advertorial_manager.new_advertorial}>新建软文</Link>
                    </Menu.Item>
                    <Menu.Item key={advertorial_manager.advertorial_statics_analysis}>
                        <Link to={advertorial_manager.advertorial_statics_analysis}>软文数据统计</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.user.advertorial_review.index}
                         title={<span><Icon type="calendar" /><span>软文审核</span></span>}>
                    <Menu.Item key={advertorial_review.advertorial_review_list}>
                        <Link to={advertorial_review.advertorial_review_list}>软文审核列表</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.user.advertorial_propagation.index}
                         title={<span><Icon type="line-chart" /><span>软文传播</span></span>}>
                    <Menu.Item key={advertorial_propagation.advertorial_propagation_list}>
                        <Link to={advertorial_propagation.advertorial_propagation_list}>软文传播列表</Link>
                    </Menu.Item>
                    <Menu.Item key={advertorial_propagation.advertorial_propagation_statics_analysis}>
                        <Link to={advertorial_propagation.advertorial_propagation_statics_analysis}>软文数据统计</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.user.network_negative_monitor.index}
                         title={<span><Icon type="share-alt" /><span>网络负面监测</span></span>}>
                    <Menu.Item key={network_negative_monitor.input_negative}>
                        <Link to={network_negative_monitor.input_negative}>录入负面信息</Link>
                    </Menu.Item>
                    <Menu.Item key={network_negative_monitor.resolve_negative}>
                        <Link to={network_negative_monitor.resolve_negative}>处理负面信息</Link>
                    </Menu.Item>
                    <Menu.Item key={network_negative_monitor.negative_statics_analysis}>
                        <Link to={network_negative_monitor.negative_statics_analysis}>监测网络负面数据</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </aside>
    }
}

SideBar.contextTypes = {
    router: React.PropTypes.any.isRequired
};
