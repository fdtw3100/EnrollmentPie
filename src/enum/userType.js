/**
 * 用户类型
 * Created by 职圈 on 2016/5/11.
 * Updated by 朱公朴 on 2016/5/23.
 */
import {PlainRoutes} from "../router/routes";

export const UserType = {
    student: {text: "学生", value: '1', index: PlainRoutes.student.index},
    university: {text: "学校", value: '2', index: PlainRoutes.university.index},
    company: {text: "企业", value: '3', index: "http://c.51zhiquan.com"},
};

export default {
    '1': UserType.student,
    '2': UserType.university,
    '3': UserType.company
};
