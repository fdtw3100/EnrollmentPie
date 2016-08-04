/**
 * 公司列表
 * Created by ZhuGongpu on 16/4/28.
 */
import React from "react";
import {Table, Button} from "antd";
import CompanyType from "../../../enum/companyType";
import TimeFilter from "../../../enum/timeFilter";

export default class CompanyList extends React.Component {
    constructor(props) {
      super(props);

      this.columns = [{
            title: '公司名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '企业类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record, index) => record.type.text
        }, {
            title: '行业类型',
            dataIndex: 'category',
            key: 'category'
        }, {
            title: '发布职位数',
            dataIndex: 'position_count',
            key: 'position_count',
            render: (text) => `${text}个`
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
        const rowSelection = {
               selectedRowKeys,
               onChange: onSelectionChange 
            };
        //数据变换,加key,type变为复合结构
        const companies = data.map((company) => Object.assign({}, company, {
            key: company.id,
            type: {
                value: company.type,
                text: CompanyType[company.type]
            }
        }));
       
        return <div className="company-list-container">
            <Table rowSelection={rowSelection}
                   columns={this.columns}
                   dataSource={companies}/>
        </div>
    }
}
