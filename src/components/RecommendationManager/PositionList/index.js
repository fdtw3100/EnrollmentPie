/**
 * 职位列表
 * Created by ZhuGongpu on 16/4/28.
 */
import React from "react";
import {Table, Button} from "antd";
import TimeFilter from "../../../enum/timeFilter";

export default class PositionList extends React.Component {
constructor(props) {
    super(props);

    this.columns = [{
            title: '职位名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '公司名称',
            dataIndex: 'company_name',
            key: 'company_name'
        }, {
            title: '薪资',
            dataIndex: 'salary',
            key: 'salary'
        }, {
            title: '地点',
            dataIndex: 'location',
            key: 'location'
        }, {
            title: "时间",
            dataIndex: 'time',
            key: "time",
            filters: [TimeFilter.None, TimeFilter.Recent_7_Days, TimeFilter.Recent_15_Days, TimeFilter.Recent_30_Days],
            onFilter: (value, record) => new Date().getTime() - record.time.getTime() < value,
            filterMultiple: false,
            render: (text, record) => record.time.toLocaleDateString()
        }];

}
    render() {
        const {data, selectedRowKeys, onSelectionChange} = this.props;
        //数据变换,加key,type变为复合结构
        const positions = data.map((position) => Object.assign({}, position, {
            key: position.id
        }));
        const rowSelection = {
            selectedRowKeys,
            onChange: onSelectionChange
        };

        return <div className="position-list-container">
            <Table rowSelection={rowSelection}
                   columns={this.columns}
                   dataSource={positions}/>
        </div>
    }
}
