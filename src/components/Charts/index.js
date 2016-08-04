/**
 *
 * 封装ECharts
 *
 * 参考:https://github.com/liekkas/re-echarts
 *
 * Created by ZhuGongpu on 16/4/24.
 */
import React, {PropTypes} from "react";
import shallowCompare from "react-addons-shallow-compare";
import echarts from "echarts";
import shuffle from "../../utils/shuffle";

/**
 *
 * @param orientation 'horizontal' | 'vertical'
 * @param showDataLabel 为false时,会显示tooltip
 * @param data {
     columns: [],
     rows: [{
        name: "",
        values: []
     }]
 }
 *
 */
export function barChartOption(config) {
    let xAxisData, yAxisData = null;

    let {data, orientation, showDataLabel, labelFormatter, showXAxis = false, showYAxis = false, showLegend, showTooltip = true} = config;

    //规整化 min 和 max
    const values = data.rows.reduce((previousValue, currentValue, currentIndex, array) =>
        previousValue.concat(...currentValue.values), []);
    const minValue = Math.floor(Math.min(...values));
    const maxValue = Math.ceil(Math.max(...values));

    if (orientation == 'vertical') { //根据orientation进行坐标轴变换
        yAxisData = data.columns;
        showYAxis = true;
    } else {
        xAxisData = data.columns;
        showXAxis = true;
    }

    const series = data.rows.map((row) => {
        return {
            type: 'bar',
            label: {
                normal: {
                    show: showDataLabel,
                    position: orientation == "vertical" ? "right" : "top",
                    formatter: labelFormatter
                }
            },
            data: row.values,
            name: row.name
        }
    });
    const legend = {
        show: showLegend,
        data: data.rows.map((row) => row.name)
    };
    const colors = ['#f88566', '#aec784', '#c786b5', '#5eaee3', '#1fbba7', '#fec004'];

    return Object.assign({
        color: shuffle(colors),
        tooltip: showTooltip ? {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        } : null,
        legend: legend,
        grid: {
            left: '6%',
            right: '6%',
            bottom: '3%',
            top: showLegend ? '60' : "20",
            containLabel: true
        },
        xAxis: {
            show: showXAxis,
            type: xAxisData ? 'category' : 'value', //不显示x轴时,type为value
            data: xAxisData,
            min: minValue,
            max: maxValue
        },
        yAxis: {
            show: showYAxis,
            type: yAxisData ? 'category' : 'value',
            data: yAxisData,
            min: minValue,
            max: maxValue
        },
        series: series
    }, config);
}

/**
 * @param data {
     columns: [],
     rows: [{
        name: "",
        values: []
     }]
 }
 *
 */
export function lineChartOption(config) {
    let {data, showLegend = true, title = null, yAxisLabelFormatter} = config;

    let xAxisData = data.columns;

    const legend = {
        show: showLegend,
        data: data.rows.map((row) => row.name)
    };
    if (title) {
        legend.top = "30";
    }

    const series = data.rows.map((row) => {
        return {
            type: 'line',
            data: row.values,
            name: row.name
        }
    });

    //规整化 min 和 max
    const values = data.rows.reduce((previousValue, currentValue, currentIndex, array) =>
        previousValue.concat(...currentValue.values), []);
    const minValue = Math.floor(Math.min(...values));
    const maxValue = Math.ceil(Math.max(...values));
    return {
        title: {
            left: 'center',
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: legend,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: showLegend ? '60' : "30",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
        },
        yAxis: {
            type: 'value',
            min: minValue,
            max: maxValue,
            axisLabel: {formatter: yAxisLabelFormatter}
        },
        series: series
    };
}

/**
 *
 * @param config {
    data: [{value, name}],
    radius: '80%',
    colors: []
 }
 * @returns {{color: string[], series: *[]}}
 */
export function pieChartOption(config) {
    const {
        data,
        radius = '80%',
        colors = [
            '#3db1d7',
            '#f98a97',
            '#ffdc84',
            '#b18ccb',
            '#86e580',
            '#ffac4e',
            '#03a9f4',//LIGHT BLUE
            '#4caf50',//GREEN
            '#3f51b5',//INDIGO
            '#e91e63',//PINK
            '#9c27b0',//PURPLE
            '#cddc39',//LIME
            '#ffeb3b',//YELLOW
            '#ffc107',//AMBER
            '#ff9800',//ORANGE
            '#FF5722',//DEEP ORANGE
            '#f44336',//RED
            '#009688'//TEAL
        ],
        tooltip
    } = config;

    if(tooltip){
        return {
            color: colors,
            series: [{
                type: 'pie',
                radius: radius,
                data: data.sort(function (a, b) {
                    return b.value - a.value
                })
            }],
            tooltip: {
                position: ['0%', '0%'],
                formatter: function (params, ticket, callback) {
                    return data[params.dataIndex].tip;
                }
            }
        }
    } else {
        return {
            color: colors,
            series: [{
                type: 'pie',
                radius: radius,
                data: data.sort(function (a, b) {
                    return b.value - a.value
                })
            }]
        }
    }
}

export function anotherBarChartOption(config){
    let legend=[];
    config.rows.forEach(obj=>{
        legend.push(obj.name);
    });
    let series=[];
    config.rows.forEach(obj=>{
        series.push({
            name:obj.name,
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:obj.values
        });
    });
    let yAxis=[];
    config.columns.forEach(obj=>{
        yAxis.push(obj);
    });
    let data= {
        legend:{data:legend},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            data: yAxis
        },
        yAxis: {
            type: 'value'
        },
        series: series
    };
    console.log(JSON.stringify(data));
    return data;
}

export function polarChartOption(config){
    let indicator=[];
    config.data.forEach(obj=>{
        indicator.push( { name: obj.name, max: config.max});
    });
    let data=[];
    config.data.forEach(obj=>{
        data.push( obj.value);
    });
    return {
        radar: {
            indicator: indicator
        },
        series: [{
            type: 'radar',
            data : [
                {
                    value : data
                }
            ]
        }]
    };
}

class ECharts extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            needInit: false //是否需要初始化,第一次创建或者主题发生变化需要init
        }
    }

    renderChart() {
        const {id, option, notMerge, notRefreshImmediately, config} = this.props;
        const chartDom = this.refs[id];
        const theme = (config && config.theme) || 'default';

        let chart = echarts.getInstanceByDom(chartDom);
        if (!chart || this.state.needInit) {
            chart = echarts.init(chartDom, theme)
        }

        if (config && config.hasOwnProperty('event')) {
            config.event.map(({type, handler}) => chart.on(type, handler))
        }

        if (config && config.showLoading) {
            chart.showLoading('default', (config && config.loadingOption) || {
                    text: '加载中...',
                    color: '#c23531',
                    textColor: '#000',
                    maskColor: 'rgba(255, 255, 255, 0.8)',
                    zlevel: 0
                })
        } else {
            chart.hideLoading();
            chart.setOption(option, notMerge, notRefreshImmediately)
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.renderChart()
    }

    componentDidUpdate() {
        this.renderChart()
    }

    componentWillReceiveProps(nextProps) {
        //如果主题切换,需要重新创建实例,因为ECharts的主题设置api在init中,
        if (this.props.config.theme !== nextProps.config.theme) {
            this.setState({needInit: true})
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    componentWillUnmount() {
        echarts.dispose(this.refs[this.props.id]);
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        const chartDom = this.refs[this.props.id];
        const chart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);
        chart.resize()
    }

    render() {
        return <div ref={this.props.id} {...this.props}></div>
    }
}

/**
 *
 * option: 图表的配置项和数据
 * notMerge: 可选，是否不跟之前设置的option进行合并，默认为false，即合并
 * notRefreshImmediately: 可选，在设置完option后是否不立即刷新画布，默认为false，即立即刷新
 * config: 设置
 *    theme: 主题
 *    event: 事件
 *    showLoading: 是否呈现加载效果
 *    loadingOption: 加载效果设置
 * id: 图表id
 */
ECharts.propTypes = {
    id: PropTypes.string.isRequired,
    option: PropTypes.object.isRequired,
    notMerge: PropTypes.bool,
    notRefreshImmediately: PropTypes.bool,
    config: PropTypes.object
};

ECharts.defaultProps = {
    config: {},
    notMerge: false,
    notRefreshImmediately: false
};

export default ECharts

