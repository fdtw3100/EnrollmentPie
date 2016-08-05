/**
 * 软文审核列表
 * Created by LinTongwei on 16/8/5.
 */

import React from "react";
import {Button} from "antd";
import PositionList from "../../../components/RecommendationManager/PositionList";
import SearchInput from "../../SearchInput";

export default class AdvertorialReviewList extends React.Component {

    constructor(props) {
        super(props);
        //TODO: 接入数据
        this.state = {
            selectedRowKeys: [],
            positions: [{
                id: "1",
                name: "系统功能测试工程师",
                company_name: "纳恩博（北京）科技有限公司",
                salary: "5k-7k",
                location: "北京",
                time: new Date("2016/4/27")
            }, {
                id: "2",
                name: "社区网络工程师",
                company_name: "长城宽带网络服务有限公司北京分公司",
                salary: "2k-7k",
                location: "北京",
                time: new Date("2016/4/27")
            }, {
                id: "3",
                name: "技术支持工程师",
                company_name: "北京市泰克贝思科技股份有限公司",
                salary: "3k-5k",
                location: "北京",
                time: new Date("2016/4/28")
            }, {
                id: "4",
                name: "手游测试工程师",
                company_name: "北京华夏乐游科技有限公司",
                salary: "4k-8k",
                location: "北京",
                time: new Date("2016/4/26")
            }, {
                id: "5",
                name: "新媒体运营实习生",
                company_name: "言之有物",
                salary: "2k-3k",
                location: "北京",
                time: new Date("2016/4/29")
            }, {
                id: "6",
                name: "Unity3D 开发工程师",
                company_name: "北京润尼尔网络科技有限公司",
                salary: "4k-8k",
                location: "北京",
                time: new Date("2016/4/28")
            }, {
                id: "7",
                name: "java+web 软件开发",
                company_name: "燕园英才（北京）教育科技有限公司",
                salary: "6k-10k",
                location: "北京",
                time: new Date("2016/4/28")
            }, {
                id: "8",
                name: "线下运营",
                company_name: "北京房友汇科技有限公司",
                salary: "4k-8k",
                location: "北京",
                time: new Date("2016/4/26")
            }, {
                id: "9",
                name: "信息录入员",
                company_name: "信恒伟嘉（北京）资产管理有限公司",
                salary: "3k-4k",
                location: "北京",
                time: new Date("2016/4/27")
            }, {
                id: "10",
                name: "用户运营",
                company_name: "北京马耐力科技有限公司",
                salary: "4k-5k",
                location: "北京",
                time: new Date("2016/4/29")
            }, {
                id: "11",
                name: "理财顾问",
                company_name: "百度",
                salary: "3k-4k",
                location: "北京",
                time: new Date("2016/4/27")
            }, {
                id: "12",
                name: "产品经理",
                company_name: "北京希澈科技有限",
                salary: "6k-12k",
                location: "北京",
                time: new Date("2016/4/26")
            }]
        };
        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.removePosition = this.removePosition.bind(this);
    }

    onSelectionChange(selectedRowKeys) {
        this.setState({selectedRowKeys});
    }

    removePosition() {
        const {positions, selectedRowKeys} = this.state;
        this.setState({
            positions: positions.filter(
                (position) => selectedRowKeys.indexOf(position.id) == -1)
        });
    }

    render() {
        const {positions, selectedRowKeys} = this.state;

        return <div className="position-manager-container">
            <h3 className="section-title" style={{display: "inline", marginRight: 30}}>今日新增加岗位数 <b>5</b></h3>
            <h3 className="section-title" style={{display: "inline"}}>总企业数 <b>19</b></h3>
            <SearchInput placeholder="输入学号或学生姓名查询"
                         style={{ width: 300, marginBottom: 10 }}/>
            <Button type="primary" style={{display: "block", marginBottom: 20, marginTop: 20}}
                    onClick={this.removePosition}
                    disabled={!(selectedRowKeys.length > 0)}>下线</Button>
            <PositionList selectedRowKeys={selectedRowKeys}
                          onSelectionChange={this.onSelectionChange}
                          data={positions}/>
        </div>
    }
}
