/**
 * 登录页面
 * Created by ZhuGongpu on 16/4/21.
 */
import React from "react";
import "./index.scss";

export default class Student extends React.Component {

    render() {
        const studentInformation = <img src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_information.png"/>;

        return <div className="student-page-container">
            <div className="student-header-container">
                <img className="student-header-left"
                     src="http://7xtbfn.com2.z0.glb.clouddn.com/buaa_logo.jpg"/>
                <img className="student-header-middle"
                     src="http://7xawab.com1.z0.glb.clouddn.com/toU-header-title.png"/>
                <img className="student-header-right"
                     src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_header_right.png"/>
            </div>
            <div className="student-section-container">
                <img
                    src="http://7xkthx.com1.z0.glb.clouddn.com/university_employment_platform/login-section-background_20160505.jpg"
                    className="student-section-image"/>
                <div className="student-form-container">
                    {studentInformation}
                </div>
            </div>
            <div className="student-container">
                <div  className="student-container_left">
                    <div className="student-task-container">
                        <img className="student-task-bg" src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_task.png"/>
                        <div className="student-task-item1">
                            <a href="/#/student/student_information_collection" target="_blank">
                                <img src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_task_direction.png"/>
                            </a>
                        </div>
                        <div className="student-task-item2">
                            <a href="#">
                                <img src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_task_quality.png"/>
                            </a>
                        </div>
                    </div>
                    <img className="download-center" src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_download.png"/>
                </div>
                <div  className="student-container_right">
                    <img className="news-center" src="http://7xawab.com1.z0.glb.clouddn.com/toU_student_index_news_position.png"/>
                </div>
            </div>
            <div className="footer">
                <div className="footer-content">
                    <a href="#">关于北航</a>
                    <span>|</span>
                    <a href="#">服务协议</a>
                    <span>|</span>
                    <a href="#">客服中心</a>
                    <span>|</span>
                    <a href="#">Copyright@北京航空航天大学招生就业处</a>
                    <span>|</span>
                    <a href="#">Powered By 职云</a>
                </div>
            </div>
        </div>
    }
}
