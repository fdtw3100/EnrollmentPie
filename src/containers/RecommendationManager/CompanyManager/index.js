/**
 * 企业审核
 * Created by ZhuGongpu on 16/4/28.
 */

import React from "react";
import {Button} from "antd";
import CompanyList from "../../../components/RecommendationManager/CompanyList";

export default class CompanyManager extends React.Component {

    constructor(props) {
        super(props);
        //TODO: 接入数据
        this.state = {
            selectedRowKeys: [],
            companies: [{
                "id": "1d85e490d7d811e5933c4d261852fbed",
                "name": "百度",
                "type": 2,
                "category": "计算机/互联网/电子商务",
                "city": "北京",
                "position_count": 15,
                "time": new Date("2016-05-12")
            }, {
                "id": "aa5a4490e51311e5ae34bd018f6249b3",
                "name": "朗信卓越",
                "type": 2,
                "category": "金融业",
                "city": "北京",
                "position_count": 3,
                "time": new Date("2016-05-10")
            }, {
                "id": "df65df509e3c11e5a67a878324a660de",
                "name": "北京我爱我家房地产经纪有限公司",
                "type": 2,
                "category": "房地产/建筑/物业",
                "city": "北京",
                "position_count": 5,
                "time": new Date("2016-05-08")
            }, {
                "id": "e8911050f00211e5b7d9d74c40ee7b50",
                "name": "宜信",
                "type": 6,
                "category": "金融业",
                "city": "北京",
                "position_count": 2,
                "time": new Date("2016-04-29")
            }, {
                "id": "93fdbf20fc7d11e58d1b5f0f7b886c6b",
                "name": "陕西巨丰投资资讯有限责任公司北京第一分公司",
                "type": 2,
                "category": "金融业",
                "city": "北京",
                "position_count": 3,
                "time": new Date("2016-04-18")
            }, {
                "id": "b5ffab50008911e68d1b5f0f7b886c6b",
                "name": "北京新东方学校",
                "type": 2,
                "category": "专业服务/教育/培训",
                "city": "北京",
                "position_count": 4,
                "time": new Date("2016-04-11")
            }, {
                "id": "980b9ad0f61d11e5b9bc2d86fa287cae",
                "name": "北京市元甲律师事务所",
                "type": 2,
                "category": "专业服务/教育/培训",
                "city": "北京",
                "position_count": 31,
                "time": new Date("2016-04-05")
            }, {
                "id": "0d2ff170c3de11e594874de67b435e37",
                "name": "三星",
                "type": 3,
                "category": "通信/电子/硬件",
                "city": "北京",
                "position_count": 1,
                "time": new Date("2016-04-02")
            }, {
                "id": "f9be1d10e11f11e5adaa076b47a5fd23",
                "name": "北京合思信息技术有限公司",
                "type": 2,
                "category": "计算机/互联网/电子商务",
                "city": "北京",
                "position_count": 4,
                "time": new Date("2016-04-01")
            }]
        };
        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.removeCompanies = this.removeCompanies.bind(this);
    }

    onSelectionChange(selectedRowKeys) {
        this.setState({selectedRowKeys});
    }

    removeCompanies() {
        const {companies, selectedRowKeys} = this.state;
        this.setState({
            companies: companies.filter(
                (company) => selectedRowKeys.indexOf(company.id) == -1)
        });
    }

    render() {
        const {companies, selectedRowKeys} = this.state;
        console.log("selectedRowKeys: %o",selectedRowKeys);
        return <div className="company-manager-container">
            <h3 className="section-title" style={{display: "inline", marginRight: 30}}>今日新增加企业数 <b>1</b></h3>
            <h3 className="section-title" style={{display: "inline"}}>总企业数 <b>9</b></h3>
            <Button type="primary" style={{display: "block", marginBottom: 20, marginTop: 20}}
                    onClick={this.removeCompanies}
                    disabled={!(selectedRowKeys.length > 0)}>下线</Button>
            <CompanyList selectedRowKeys={selectedRowKeys}
                         onSelectionChange={this.onSelectionChange}
                         data={companies}/>
        </div>

    }
}
