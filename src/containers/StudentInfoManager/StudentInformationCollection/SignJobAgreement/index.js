/**
 * 签就业协议
 */

import React from "react";
import {Select,Radio} from "antd";
import SelectOption from "../../../../components/StudentManager/SelectOption";
import RadioGroup from "../../../../components/StudentManager/RadioGroup";

const Option = Select.Option;
const IndustrysRadioGroup = Radio.Group;

export default class SignJobAgreement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        defaultstage: '1'
     }
    
     //TODO：定义数据
     
     //就业地区
     this.area = [{
               key: 'beijing',
               value: '北京'
             },{
               key: 'xi’an',
               value: '西安'
             },{
               key: 'guiyang',
               value: '贵阳'
             },{
               key: 'nanjing',
               value: '南京'
            },{
               key: 'guangzhou',
               value: '广州'
            },{
               key: 'shanghai',
               value: '上海'
            }];

      //公司规模
      this.companyScale = [{
                key: '20',
                value: '20人以下'
           },{
                key: '20-50',
                value: '20-50人'
           },{
               key: '50-100',
               value: '50-100人'
           },{
               key: '100-500',
               value: '100-500人'
           },{
               key: '500',
               value: '500人以上'
           }];

        //单位性质
        this.companyProperty = [{
                   key: 'IT科技',
                   value: '科研设计'
              }, {
                   key: 'education',
                   value: '教育'
               }];

        //年薪
       this.annualSalary = [{
                   key: '5W',
                   value: '5万以下',
              }, {
                   key: '5-10W',
                   value: '5-10万'
               }, {
                   key: '10W-20W',
                   value: '10-20万'
               }, {
                   key: '20W',
                   value: '20万以上'
               }];

        //就业方向
        this.industries = ['科学研究和技术服务业','信息传输','软件和信息技术服务业','制造业','交通运输,仓储和邮政业',
                             '教育,部队','公共管理,社会保障和社会组织','金融业','电力,热力,燃气及水生产和供应业',
                             '文化,体育和娱乐业','建筑批发和零售业','租赁和商务服务业','修理和其他服务业','卫生和社会工作',
                             '居民服务'] 
     }

     //改变状态
     onChange(e) {
            this.setState({
                defaultstage: e.target.value,
        });
     }

    //处理选择值
    getSelectValue(e) {

     }

    render() {
        return <div>
                <h3 className="section-title">就业地区</h3>
                <SelectOption data={this.area} placeholderTitle="请选择就业地区" />

                <h3 className="section-title">就业单位人数</h3>
                <SelectOption data={this.companyScale} placeholderTitle="请选择单位人数" />

                <h3 className="section-title">就业单位性质</h3>
                <SelectOption data={this.companyProperty} placeholderTitle="请选择单位性质" />

                <h3 className="section-title">年薪</h3>
                <SelectOption data={this.annualSalary} placeholderTitle="您的年薪" />

                <h3 className="section-title">就业行业</h3>
                <RadioGroup data={this.industries} changeStage={this.onChange.bind(this)}
                            defaultValue={this.state.defaultstage}/>
            </div>
    }
}
