/**
 * Created by ZhuGongpu on 16/4/22.
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
            TreeRoutes.university.position_recommendation_manager.index,
            TreeRoutes.university.student_info_manager.index,
            TreeRoutes.university.campus_recruitment_manager.index,
            TreeRoutes.university.employment_quality_report.index,
            TreeRoutes.university.schoolfellow_manager.index
        ].filter((key) => new RegExp(key).test(this.props.location.pathname));
}

    render() {
        const {
            employment_quality_report,
            position_recommendation_manager,
            student_info_manager,
            campus_recruitment_manager,
            schoolfellow_manager
        } = PlainRoutes.university;

        return <aside className="side-bar-container clearfix">
            <Menu
                defaultOpenKeys={this.defaultOpenKeys}
                selectedKeys={[this.props.location.pathname]}
                mode="inline">
                <SubMenu key={TreeRoutes.university.position_recommendation_manager.index}
                         title={<span><Icon type="user" /><span>职位推荐管理</span></span>}>
                    <Menu.Item key={position_recommendation_manager.effect_feedback}>
                        <Link to={position_recommendation_manager.effect_feedback}>效果反馈</Link>
                    </Menu.Item>
                    <Menu.Item key={position_recommendation_manager.company_manager}>
                        <Link to={position_recommendation_manager.company_manager}>企业审核</Link>
                    </Menu.Item>
                    <Menu.Item key={position_recommendation_manager.position_manager}>
                        <Link to={position_recommendation_manager.position_manager}>职位审核</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.university.student_info_manager.index}
                         title={<span><Icon type="setting" /><span>学生信息管理</span></span>}>
                    <Menu.Item key={student_info_manager.student_list}>
                        <Link to={student_info_manager.student_list}>信息筛查</Link>
                    </Menu.Item>
                    <Menu.Item key={student_info_manager.collect_info}>
                        <Link to={student_info_manager.collect_info}>信息采集</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.university.campus_recruitment_manager.index}
                         title={<span><Icon type="calendar" /><span>校招活动管理</span></span>}>
                    <Menu.Item key={campus_recruitment_manager.view_fairs}>
                        <Link to={campus_recruitment_manager.view_fairs}>查看活动</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.university.employment_quality_report.index}
                         title={<span><Icon type="line-chart" /><span>就业质量报告</span></span>}>
                    <Menu.Item key={employment_quality_report.overall}>
                        <Link to={employment_quality_report.overall}>基本情况</Link>
                    </Menu.Item>
                    <Menu.Item key={employment_quality_report.quality_evaluation}>
                        <Link to={employment_quality_report.quality_evaluation}>质量评估</Link>
                    </Menu.Item>
                    <Menu.Item key={employment_quality_report.trend}>
                        <Link to={employment_quality_report.trend}>历年变化</Link>
                    </Menu.Item>
                    <Menu.Item key={employment_quality_report.student_evaluation}>
                        <Link to={employment_quality_report.student_evaluation}>学生调研</Link>
                    </Menu.Item>
                    <Menu.Item key={employment_quality_report.company_feedback}>
                        <Link to={employment_quality_report.company_feedback}>单位反馈</Link>
                    </Menu.Item>
                    <Menu.Item key={employment_quality_report.export_report}>
                        <Link to={employment_quality_report.export_report}>导出报告</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key={TreeRoutes.university.schoolfellow_manager.index}
                         title={<span><Icon type="share-alt" /><span>校友信息管理</span></span>}>
                    <Menu.Item key={schoolfellow_manager.statistics}>
                        <Link to={schoolfellow_manager.statistics}>校友统计</Link>
                    </Menu.Item>
                    <Menu.Item key={schoolfellow_manager.contact}>
                        <Link to={schoolfellow_manager.contact}>校友名录</Link>
                    </Menu.Item>
                    <Menu.Item key={schoolfellow_manager.survey}>
                        <Link to={schoolfellow_manager.survey}>校友问卷</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </aside>
    }
}

SideBar.contextTypes = {
    router: React.PropTypes.any.isRequired
};
