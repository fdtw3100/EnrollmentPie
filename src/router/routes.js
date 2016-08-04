/**
 * 定义全局路由
 * Created by ZhuGongpu on 16/5/20.
 */
export const TreeRoutes = {
    index: "/",
    login: "/login",
    university: {
        index: "university",
        //职位推荐管理
        position_recommendation_manager: {
            index: "position_recommendation",
            //效果反馈
            effect_feedback: "effect_feedback",
            //企业审核
            company_manager: "company_manager",
            //职位审核
            position_manager: "position_manager"
        },
        //学生信息管理
        student_info_manager: {
            index: "student_info",
            //信息筛查
            student_list: "student_list",
            //信息采集
            collect_info: "collect_info"
        },
        //校招活动管理
        campus_recruitment_manager: {
            index: "campus_recruitment",
            //查看活动
            view_fairs: "view_fairs"
        },
        //就业质量报告
        employment_quality_report: {
            index: "employment_quality_report",
            //基本情况
            overall: "overall",
            //质量评估
            quality_evaluation: "quality_evaluation",
            //历史变化
            trend: "trend",
            //学生调研
            student_evaluation: "student_evaluation",
            //单位反馈
            company_feedback: "company_feedback",
            //导出报告
            export_report: "export_report"
        },
        //校友信息管理
        schoolfellow_manager: {
            index: "schoolfellow",
            //校友统计
            statistics: "statistics",
            //校友名录
            contact: "contact",
            //校友问卷
            survey: "survey"
        }
    },
    student: {
        index: "student",
        collect_info: "collect_info"
    }
};

//TODO:
export const PlainRoutes = {
    index: TreeRoutes.index,
    login: TreeRoutes.login,
    //region university
    university: {
        index: `${TreeRoutes.index}${TreeRoutes.university.index}`,
        //职位推荐管理
        position_recommendation_manager: {
            //效果反馈
            effect_feedback: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.position_recommendation_manager.index}/${TreeRoutes.university.position_recommendation_manager.effect_feedback}`,
            //企业审核
            company_manager: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.position_recommendation_manager.index}/${TreeRoutes.university.position_recommendation_manager.company_manager}`,
            //职位审核
            position_manager: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.position_recommendation_manager.index}/${TreeRoutes.university.position_recommendation_manager.position_manager}`
        },
        //学生信息管理
        student_info_manager: {
            //信息筛查
            student_list: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.student_info_manager.index}/${TreeRoutes.university.student_info_manager.student_list}`,
            //信息采集
            collect_info: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.student_info_manager.index}/${TreeRoutes.university.student_info_manager.collect_info}`
        },
        //校招活动管理
        campus_recruitment_manager: {
            //查看活动
            view_fairs: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.campus_recruitment_manager.index}/${TreeRoutes.university.campus_recruitment_manager.view_fairs}`
        },
        //就业质量报告
        employment_quality_report: {
            //基本情况
            overall: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.employment_quality_report.index}/${TreeRoutes.university.employment_quality_report.overall}`,
            //质量评估
            quality_evaluation: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.employment_quality_report.index}/${TreeRoutes.university.employment_quality_report.quality_evaluation}`,
            //历史变化
            trend: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.employment_quality_report.index}/${TreeRoutes.university.employment_quality_report.trend}`,
            //学生调研
            student_evaluation: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.employment_quality_report.index}/${TreeRoutes.university.employment_quality_report.student_evaluation}`,
            //单位反馈
            company_feedback: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.employment_quality_report.index}/${TreeRoutes.university.employment_quality_report.company_feedback}`,
            //导出报告
            export_report: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.employment_quality_report.index}/${TreeRoutes.university.employment_quality_report.export_report}`
        },
        //校友信息管理
        schoolfellow_manager: {
            //校友统计
            statistics: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.schoolfellow_manager.index}/${TreeRoutes.university.schoolfellow_manager.statistics}`,
            //校友名录
            contact: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.schoolfellow_manager.index}/${TreeRoutes.university.schoolfellow_manager.contact}`,
            //校友问卷
            survey: `${TreeRoutes.index}${TreeRoutes.university.index}/${TreeRoutes.university.schoolfellow_manager.index}/${TreeRoutes.university.schoolfellow_manager.survey}`
        }
    },
    //endregion
    student: {
        index: `${TreeRoutes.index}${TreeRoutes.student.index}`,
        collect_info: `${TreeRoutes.index}${TreeRoutes.student.index}/${TreeRoutes.student.collect_info}`
    }
};

console.log("Routes: PlainRoutes: %o", PlainRoutes);
