/**
 * 用户类型
 * Created by LinTongwei on 2016/8/5.
 */
import {PlainRoutes} from "../router/routes";

export const UserType = {
    user: {text: "普通用户", value: '1', index: PlainRoutes.user.index},
    admin: {text: "管理员", value: '2', index: PlainRoutes.admin.index}
};

export default {
    '1': UserType.user,
    '2': UserType.admin
};
