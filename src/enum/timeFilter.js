/**
 * 时间Filter
 *
 * {text, value}的形式,其中value为毫秒数
 *
 * Created by ZhuGongpu on 16/5/12.
 */
export default {
    None: {text: "不限", value: Number.MAX_SAFE_INTEGER},
    Recent_7_Days: {text: "最近7天", value: 7 * 3600 * 24 * 1000},
    Recent_15_Days: {text: "最近15天", value: 15 * 3600 * 24 * 1000},
    Recent_30_Days: {text: "最近30天", value: 30 * 3600 * 24 * 1000}
}
