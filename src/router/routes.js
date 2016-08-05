/**
 * 定义全局路由
 * Created by LinTongwei on 16/8/5.
 */
export const TreeRoutes = {
    index: "/",
    login: "/login",
    user: {
        index: "user",
        //招生计划
        enrollment_plan: {
            index: "enrollment_plan",
            //竞品分析
            competitor_analysis: "competitor_analysis",
            //策略制定
            strategy_design: "strategy_design"
        },
        //软文管理
        advertorial_manager: {
            index: "advertorial_manager",
            //软文列表
            advertorial_list: "advertorial_list",
            //新建软文
            new_advertorial: "new_advertorial",
            //软文数据统计
            advertorial_statics_analysis: "advertorial_statics_analysis"
        },
        //软文审核
        advertorial_review: {
            index: "advertorial_review",
            //软文审核列表
            advertorial_review_list: "advertorial_review_list"
        },
        //软文传播
        advertorial_propagation: {
            index: "advertorial_propagation",
            //软文传播列表
            advertorial_propagation_list: "advertorial_propagation_list",
            //软文数据统计
            advertorial_propagation_statics_analysis: "advertorial_propagation_statics_analysis"
        },
        //网络负面监测
        network_negative_monitor: {
            index: "network_negative_monitor",
            //录入负面信息
            input_negative: "input_negative",
            //处理负面信息
            resolve_negative: "resolve_negative",
            //监测网络负面数据
            negative_statics_analysis: "negative_statics_analysis"
        }
    },
    admin: {
        index: "admin"
    }
};

export const PlainRoutes = {
    index: TreeRoutes.index,
    login: TreeRoutes.login,
    //region user
    user: {
        index: `${TreeRoutes.index}${TreeRoutes.user.index}`,
        //招生计划
        enrollment_plan: {
            //竞品分析
            competitor_analysis: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.enrollment_plan.index}/${TreeRoutes.user.enrollment_plan.competitor_analysis}`,
            //策略制定
            strategy_design: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.enrollment_plan.index}/${TreeRoutes.user.enrollment_plan.strategy_design}`
        },
        //软文管理
        advertorial_manager: {
            //软文列表
            advertorial_list: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.advertorial_manager.index}/${TreeRoutes.user.advertorial_manager.advertorial_list}`,
            //新建软文
            new_advertorial: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.advertorial_manager.index}/${TreeRoutes.user.advertorial_manager.new_advertorial}`,
            //软文数据统计
            advertorial_statics_analysis: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.advertorial_manager.index}/${TreeRoutes.user.advertorial_manager.advertorial_statics_analysis}`
        },
        //软文审核
        advertorial_review: {
            //软文审核列表
            advertorial_review_list: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.advertorial_review.index}/${TreeRoutes.user.advertorial_review.advertorial_review_list}`
        },
        //软文传播
        advertorial_propagation: {
            //软文传播列表
            advertorial_propagation_list: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.advertorial_propagation.index}/${TreeRoutes.user.advertorial_propagation.advertorial_propagation_list}`,
            //软文数据统计
            advertorial_propagation_statics_analysis: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.advertorial_propagation.index}/${TreeRoutes.user.advertorial_propagation.advertorial_propagation_statics_analysis}`
        },
        //网络负面监测
        network_negative_monitor: {
            //录入负面信息
            input_negative: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.network_negative_monitor.index}/${TreeRoutes.user.network_negative_monitor.input_negative}`,
            //处理负面信息
            resolve_negative: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.network_negative_monitor.index}/${TreeRoutes.user.network_negative_monitor.resolve_negative}`,
            //监测网络负面数据
            negative_statics_analysis: `${TreeRoutes.index}${TreeRoutes.user.index}/${TreeRoutes.user.network_negative_monitor.index}/${TreeRoutes.user.network_negative_monitor.negative_statics_analysis}`
        }
    },
    //endregion
    admin: {
        index: `${TreeRoutes.index}${TreeRoutes.admin.index}`
    }
};

console.log("Routes: PlainRoutes: %o", PlainRoutes);
