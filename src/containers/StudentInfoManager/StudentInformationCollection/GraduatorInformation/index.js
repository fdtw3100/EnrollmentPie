/**
 * 基本信息
 * Created by ShayangLan on 2016/7/14.
 */


import React from "react";
import "../../../EmploymentQualityReport/index.scss";
import "../../../../style/colors.scss";
import "./index.scss"


export default class GraduatorInformation extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      };

      //定义数据
     this.graduatorInformation = [{
            label: "姓名",
            content: {
                text: "张丽",
                type: "text"
            }
        }, {
            label: "性别",
            content: {
                text: "女",
                type: "text"
            }
        }, {
            label: "生源地",
            content: {
                text: "贵州省六盘水",
                type: "text",
            }
        }, {
            label: "出生日期",
            content: {
                text: "19930803",
                type: "text"
            }

        }, {
            label: "政治面貌",
            content: {
                text: "团员",
                type: "text"
            }
        }, {
            label: "学历",
            content: {
                text: "本科",
                type: "text"
            }
        }, {
            label: "籍贯",
            content: {
                text: "贵州",
                type: "text"
            }
        }, {
            label: "学院",
            content: {
                text: "计算机",
                type: "text"
            }
        }, {
            label: "专业",
            content: {
                text: "计算机",
                type: "text"
            }
        }, {
            label: "手机号",
            content: {
                text: "12345678990",
                type: "text"
            }
      }];
 }

   modifyInfor(e){
         this.setState({
            
         })
   }

  render() {
        return <ul className="information-container">
            {
                this.graduatorInformation.map((labelItem) =>
                    <li key={labelItem.label} className="information-container-item item-margin-bottom-10">{labelItem.label}<i>：</i>
                        {labelItem['content'].text}
                    </li>
                )
            }
        </ul>
    }

}
