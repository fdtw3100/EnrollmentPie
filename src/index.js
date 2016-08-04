// import "es5-shim";
//import "es5-shim/es5-sham";
import "babel-polyfill";
import "console-polyfill";
import React from "react";
import "antd/dist/antd.less";
import "./style/global.scss";
import "./style/colors.scss";
import "./style/index.less";
import ReactDOM from "react-dom";
import AppRouter from "./router";

ReactDOM.render((
    <AppRouter />
), document.getElementById('app'));
