/**
 * 竞品列表列表
 * Created by LinTongwei on 16/8/6.
 */
import React from "react";
import {Table, Button} from "antd";
import TimeFilter from "../../../enum/timeFilter";

export default class CompetitorList extends React.Component {
constructor(props) {
    super(props);

    this.columns = [{
            title: '竞品名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '撰写人',
            dataIndex: 'author',
            key: 'author'
        }, {
            title: "发布时间",
            dataIndex: 'time',
            key: "time",
            filters: [TimeFilter.None, TimeFilter.Recent_7_Days, TimeFilter.Recent_15_Days, TimeFilter.Recent_30_Days],
            onFilter: (value, record) => new Date().getTime() - record.time.getTime() < value,
            filterMultiple: false,
            render: (text, record) => record.time.toLocaleDateString()
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <span>
                    <a href="#">查看</a>
                    <span className="ant-divider"></span>
                    <a href="#">修改</a>
                </span>
            )        //TODO:
    }];

}
    render() {
        const {data} = this.props;
        //数据变换,加key,type变为复合结构
        const competitors = data.map((competitor) => Object.assign({}, competitor, {
            key: competitor.id
        }));

        return <div className="competitor-list-container">
            <Table columns={this.columns}
                   dataSource={competitors}/>
        </div>
    }
}
