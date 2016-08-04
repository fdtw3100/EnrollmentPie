/**
 * Created by ZhuGongpu on 16/4/24.
 */
import React from "react";
import App from "../containers/App";
import Login from "../containers/Login/index";
import EmploymentQualityOverallReport from "../containers/EmploymentQualityReport/Overall";
import EmploymentQualityEvaluation from "../containers/EmploymentQualityReport/QualityEvaluation";
import EmploymentQualityHistoryTrend from "../containers/EmploymentQualityReport/HistoryTrend";
import StudentEvaluation from "../containers/EmploymentQualityReport/StudentEvaluation";
import CompanyFeedback from "../containers/EmploymentQualityReport/CompanyFeedback";
import ExportReport from "../containers/EmploymentQualityReport/ExportReport";
import CompanyManager from "../containers/RecommendationManager/CompanyManager";
import PositionManager from "../containers/RecommendationManager/PositionManager";
import EffectFeedback from "../containers/RecommendationManager/EffectFeedback";
import StudentManager from "../containers/StudentInfoManager/StudentManager";
import InformationCollection from "../containers/StudentInfoManager/StudentInformationCollection";
import CampusRecruitmentManager from "../containers/CampusRecruitmentManager";
import SchoolfellowSurvey from "../containers/SchoolfellowManager/Survey";
import SchoolfellowContact from "../containers/SchoolfellowManager/Contact";
import SchoolfellowStatistics from "../containers/SchoolfellowManager/Statistics";
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from "react-router";
import {TreeRoutes, PlainRoutes} from "./routes";
import Student from "../containers/Student";
import StudentInformationCollection from "../containers/StudentInfoManager/StudentInformationCollection";
import * as auth from "../utils/auth";

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) { //判断是否登录
        console.log("replace");
        replace({
            pathname: "/login",
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

export default (props) => <Router history={browserHistory}>
    <Route path={TreeRoutes.login} component={Login}/>
    <Route path={TreeRoutes.index} onEnter={requireAuth}>
        {/*University*/}
        <Route path={TreeRoutes.university.index} component={App}>

            <IndexRedirect to={TreeRoutes.university.position_recommendation_manager.index}/>

            {/*职位推荐管理*/}
            <Route path={TreeRoutes.university.position_recommendation_manager.index}>
                <IndexRedirect to={PlainRoutes.university.position_recommendation_manager.effect_feedback}/>
                <Route path={TreeRoutes.university.position_recommendation_manager.effect_feedback}
                       component={EffectFeedback}/>
                <Route path={TreeRoutes.university.position_recommendation_manager.company_manager}
                       component={CompanyManager}/>
                <Route path={TreeRoutes.university.position_recommendation_manager.position_manager}
                       component={PositionManager}/>
            </Route>

            {/*学生信息管理*/}
            <Route path={TreeRoutes.university.student_info_manager.index}>
                <IndexRedirect to={PlainRoutes.university.student_info_manager.student_list}/>
                <Route path={TreeRoutes.university.student_info_manager.student_list} component={StudentManager}/>
                <Route path={TreeRoutes.university.student_info_manager.collect_info}
                       component={InformationCollection}/>
            </Route>

            {/*校招活动管理*/}
            <Route path={TreeRoutes.university.campus_recruitment_manager.index}>
                <IndexRedirect to={PlainRoutes.university.campus_recruitment_manager.view_fairs}/>
                <Route path={TreeRoutes.university.campus_recruitment_manager.view_fairs}
                       component={CampusRecruitmentManager}/>
            </Route>

            {/*就业质量报告*/}
            <Route path={TreeRoutes.university.employment_quality_report.index}>
                <IndexRedirect to={PlainRoutes.university.employment_quality_report.overall}/>
                <Route path={TreeRoutes.university.employment_quality_report.overall}
                       component={EmploymentQualityOverallReport}/>
                <Route path={TreeRoutes.university.employment_quality_report.quality_evaluation}
                       component={EmploymentQualityEvaluation}/>
                <Route path={TreeRoutes.university.employment_quality_report.trend}
                       component={EmploymentQualityHistoryTrend}/>
                <Route path={TreeRoutes.university.employment_quality_report.student_evaluation}
                       component={StudentEvaluation}/>
                <Route path={TreeRoutes.university.employment_quality_report.company_feedback}
                       component={CompanyFeedback}/>
                <Route path={TreeRoutes.university.employment_quality_report.export_report} component={ExportReport}/>
            </Route>

            {/*校友信息管理*/}
            <Route path={TreeRoutes.university.schoolfellow_manager.index}>
                <IndexRedirect to={PlainRoutes.university.schoolfellow_manager.statistics}/>
                <Route path={TreeRoutes.university.schoolfellow_manager.statistics} component={SchoolfellowStatistics}/>
                <Route path={TreeRoutes.university.schoolfellow_manager.contact} component={SchoolfellowContact}/>
                <Route path={TreeRoutes.university.schoolfellow_manager.survey} component={SchoolfellowSurvey}/>
            </Route>
        </Route>

        {/*Student*/}
        <Route path={TreeRoutes.student.index}>
            <IndexRoute component={Student}/>
            <Route path={TreeRoutes.student.collect_info} component={StudentInformationCollection}/>
        </Route>
    </Route>
</Router>;
