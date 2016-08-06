/**
 * 软文审核列表
 * Created by LinTongwei on 16/8/5.
 */

import React from "react";
import {Button, Tabs} from "antd";
import CompetitorList from "../../../components/EnrollmentPlan/CompetitorList";
import SearchInput from "../../SearchInput";
import "../index.scss";

const TabPane = Tabs.TabPane;

export default class AdvertorialReviewList extends React.Component {

    constructor(props) {
        super(props);
        //TODO: 接入数据
        this.state = {
            competitors: [{
                id: "1",
                name: "盛华学院",
                author: "李想",
                time: new Date("2016/4/27")
            }, {
                id: "2",
                name: "盛华学院",
                author: "李想",
                time: new Date("2016/4/27")
            }, {
                id: "3",
                name: "盛华学院",
                author: "李想",
                time: new Date("2016/4/28")
            }]
        };
    }

    createCompetitorAnalysis() {
        window.location.href="/";         //TODO:
    }

    render() {
        const {competitors} = this.state;

        return <div className="competitor-manager-container">
            <h3 className="section-title">竞品分析</h3>
            <SearchInput placeholder="输入关键词：标题、内容等"
                         style={{ width: 300, marginBottom: 10 }}/>
            <Tabs>
                <TabPane tab="竞品列表" key="1">
                    <Button type="primary" style={{display: "block", marginBottom: 20, marginTop: 20}}
                            onClick={this.createCompetitorAnalysis.bind(this)}>写竞品</Button>
                    <CompetitorList data={competitors}/>
                </TabPane>
                <TabPane tab="我的竞品文档" key="2">
                    <Button type="primary" style={{display: "block", marginBottom: 20, marginTop: 20}}
                            onClick={this.createCompetitorAnalysis.bind(this)}>写竞品</Button>
                    <CompetitorList data={competitors}/>
                </TabPane>
                <TabPane tab="草稿箱" key="3">
                    <Button type="primary" style={{display: "block", marginBottom: 20, marginTop: 20}}
                            onClick={this.createCompetitorAnalysis.bind(this)}>写竞品</Button>
                    <CompetitorList data={competitors}/>
                </TabPane>
            </Tabs>
        </div>
    }
}
