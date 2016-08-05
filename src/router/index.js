/**
 * Created by LinTongwei on 16/8/5.
 */
import React from "react";

import App from "../containers/App";
import Login from "../containers/Login/index";
import NotFound from "../containers/NotFound/index";
import CompetitorAnalysis from "../containers/EnrollmentPlan/CompetitorAnalysis";
import StrategyDesign from "../containers/EnrollmentPlan/StrategyDesign";
import AdvertorialList from "../containers/AdvertorialManager/AdvertorialList";
import AdvertorialStaticsAnalysis from "../containers/AdvertorialManager/AdvertorialStaticsAnalysis";
import AdvertorialReviewList from "../containers/AdvertorialReview/AdvertorialReviewList";
import AdvertorialPropagationList from "../containers/AdvertorialPropagation/AdvertorialPropagationList";
import AdvertorialPropagationStaticsAnalysis from "../containers/AdvertorialPropagation/AdvertorialPropagationStaticsAnalysis";
import ResolveNegative from "../containers/NetworkNegativeMonitor/ResolveNegative";
import NegativeStaticsAnalysis from "../containers/NetworkNegativeMonitor/NegativeStaticsAnalysis";
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from "react-router";
import {TreeRoutes, PlainRoutes} from "./routes";
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
        {/*User*/}
        <Route path={TreeRoutes.user.index} component={App}>

            <IndexRedirect to={TreeRoutes.user.enrollment_plan.index}/>

            {/*招生计划*/}
            <Route path={TreeRoutes.user.enrollment_plan.index}>
                <IndexRedirect to={PlainRoutes.user.enrollment_plan.competitor_analysis}/>
                <Route path={TreeRoutes.user.enrollment_plan.competitor_analysis}
                       component={CompetitorAnalysis}/>
                <Route path={TreeRoutes.user.enrollment_plan.strategy_design}
                       component={StrategyDesign}/>
            </Route>

            {/*软文管理*/}
            <Route path={TreeRoutes.user.advertorial_manager.index}>
                <IndexRedirect to={PlainRoutes.user.advertorial_manager.advertorial_list}/>
                <Route path={TreeRoutes.user.advertorial_manager.advertorial_list}
                       component={AdvertorialList}/>
                <Route path={TreeRoutes.user.advertorial_manager.new_advertorial}
                       component={NotFound}/>
                <Route path={TreeRoutes.user.advertorial_manager.advertorial_statics_analysis}
                       component={AdvertorialStaticsAnalysis}/>
            </Route>

            {/*软文审核*/}
            <Route path={TreeRoutes.user.advertorial_review.index}>
                <IndexRedirect to={PlainRoutes.user.advertorial_review.advertorial_review_list}/>
                <Route path={TreeRoutes.user.advertorial_review.advertorial_review_list}
                       component={AdvertorialReviewList}/>
            </Route>

            {/*软文传播*/}
            <Route path={TreeRoutes.user.advertorial_propagation.index}>
                <IndexRedirect to={PlainRoutes.user.advertorial_propagation.advertorial_propagation_list}/>
                <Route path={TreeRoutes.user.advertorial_propagation.advertorial_propagation_list}
                       component={AdvertorialPropagationList}/>
                <Route path={TreeRoutes.user.advertorial_propagation.advertorial_propagation_statics_analysis}
                       component={AdvertorialPropagationStaticsAnalysis}/>
            </Route>

            {/*网络负面监测*/}
            <Route path={TreeRoutes.user.network_negative_monitor.index}>
                <IndexRedirect to={PlainRoutes.user.network_negative_monitor.resolve_negative}/>
                <Route path={TreeRoutes.user.network_negative_monitor.input_negative}
                       component={NotFound}/>
                <Route path={TreeRoutes.user.network_negative_monitor.resolve_negative}
                       component={ResolveNegative}/>
                <Route path={TreeRoutes.user.network_negative_monitor.negative_statics_analysis}
                       component={NegativeStaticsAnalysis}/>
            </Route>

        </Route>

        {/*admin*/}
        <Route path={TreeRoutes.admin.index}>
            <IndexRoute component={NotFound}/>
        </Route>
    </Route>
</Router>;
