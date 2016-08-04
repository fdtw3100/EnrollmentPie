import React from "react";
import {Table} from "antd";

/**
 * 各院系专业就业率
 */
export default class DepartmentEmploymentWhereaboutsTable extends React.Component {
    render() {
        const data = this.props.data.map(
            (departmentItem) =>
                departmentItem.majors.map((majorItem, index, array) =>
                    // 每个系第一个专业有department,其他均没有
                    Object.assign(
                        {
                            key: departmentItem.department + majorItem.major,
                            department: index == 0 ? departmentItem.department : null
                        },
                        majorItem)
                )
        ).reduce((previousValue, currentValue, index, array) => previousValue.concat(currentValue));

        return <Table columns={this.props.tabColumns} dataSource={data}/>;
    }
}
