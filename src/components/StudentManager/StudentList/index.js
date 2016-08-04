/**
 * 学生列表
 * Created by ZhuGongpu on 16/4/28.
 */
import React from "react";
import {Table, Button} from "antd";
import CompanyType from "../../../enum/companyType";

export default class StudentList extends React.Component {
   constructor(props) {
       super(props);
       this.columns = [{
            title: '学号',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '院系',
            dataIndex: 'department',
            key: 'department'
        }, {
            title: '专业',
            dataIndex: 'major',
            key: 'major'
        }, {
            title: '就业情况',
            dataIndex: 'employment',
            key: 'employment'
        }];
   }
    render() {
        const {data} = this.props;
        //数据变换,加key
        const students = data.map((student) => Object.assign({}, student, {
            key: student.id,
            type: {
                value: student.type,
                text: CompanyType[student.type]
            }
        }));
        return <div className="student-list-container">
            <Table columns={this.columns}
                   dataSource={students}/>
        </div>
    }
}
