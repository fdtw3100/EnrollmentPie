/**
 * 登录页面
 * Created by ZhuGongpu on 16/4/21.
 */
import React from "react";
import {routerShape} from "react-router";
import {Tabs, Form, Input, Button, Checkbox, Radio, Tooltip, Icon} from "antd";
import "./index.scss";
import * as auth from "../../utils/auth";
import userType, {UserType} from "../../enum/userType";
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userType: UserType.user
        };

        this.onUserTypeChange = this.onUserTypeChange.bind(this);
    }

    onUserTypeChange(type) {
        this.setState({userType: userType[type]});
    }

    login(event) {
        event.preventDefault();
        const {location} = this.props;
        const userType = this.state.userType;

        //TODO: dummy implementation
        auth.login("", "", userType, () => {
            let nextPathname = userType.index;
            // 防止出现将/university/employment_quality_report/student_evaluation匹配成/student的情况
            if (!nextPathname.endsWith("/")) nextPathname = nextPathname.concat("/");

            if (location.state && location.state.nextPathname && new RegExp(nextPathname).test(location.state.nextPathname)) {//判断当前userType能否访问nextPathname
                nextPathname = location.state.nextPathname;
            }

            this.context.router.replace(nextPathname);
        });
    }

    render() {
        const {userType} = this.state;
        const {getFieldProps} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 3},
            wrapperCol: {span: 5}
        };

        const loginForm = <Form className="login-form" horizontal onSubmit={this.login.bind(this)}>
            <FormItem
                {...formItemLayout}>
                <Input className="login-form-input-box" type="text" value={this.state.userType=='2'?"wangsihan":"liuqi"}
                       placeholder="请输入用户名"/>
            </FormItem>
            <FormItem
                {...formItemLayout}>
                <Input className="login-form-input-box" type="password" value="zhiquan"
                       placeholder="请输入密码"/>
            </FormItem>
            <FormItem
                style={{ marginTop: 24 }}>
                <Button className="login-button" type="primary" htmlType="submit">登录</Button>
            </FormItem>
            <FormItem
                style={{ marginTop: -10, marginBottom: 10 }}>
                <Button className="forget-password-button">忘记密码?</Button>
            </FormItem>
        </Form>;

        const loginFormTab = <Tabs className="login-form-tabs"
                                   activeKey={userType.value}
                                   onChange={this.onUserTypeChange}>
            <TabPane tab={UserType.user.text} key={UserType.user.value}>{loginForm}</TabPane>
            <TabPane tab={UserType.admin.text} key={UserType.admin.value}>{loginForm}</TabPane>
        </Tabs>;

        return <div className="login-container">
            <div className="login-header-container">
                <img className="login-header"
                     src="http://7xkthx.com1.z0.glb.clouddn.com/university_employment_platform/buaa_logo.png"/>
            </div>
            <div className="login-section-container">
                <img
                    src="http://7xkthx.com1.z0.glb.clouddn.com/university_employment_platform/login-section-background_20160505.jpg"
                    className="login-section-image"/>
                <div className="login-form-container">
                    {loginFormTab}
                </div>
            </div>
            <img style={{width: '100%'}}
                 src="http://static.51zhiquan.com/university_employment_platform/login-introduction_20160505.jpg"/>
        </div>
    }
}

Login.contextTypes = {
    router: routerShape.isRequired
};

export default Form.create()(Login);
