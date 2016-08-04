/**
 * 搜索框
 * Created by ZhuGongpu on 16/4/28.
 */
import React from "react";
import {Icon, Input, Button} from "antd";
import classNames from "classnames";
const InputGroup = Input.Group;

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            focus: false
        }
    }

    handleInputChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement
        });
    }

    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch();
        }
    }

    render() {
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.value.trim()
        });
        const searchCls = classNames({
            'ant-search-input': true,
            'ant-search-input-focus': this.state.focus
        });
        return (
            <InputGroup className={searchCls} style={this.props.style}>
                <Input {...this.props} value={this.state.value}
                                       onChange={this.handleInputChange.bind(this)}
                                       onFocus={this.handleFocusBlur.bind(this)}
                                       onBlur={this.handleFocusBlur.bind(this)}/>
                <div className="ant-input-group-wrap">
                    <Button className={btnCls}
                            size={this.props.size}
                            onClick={this.handleSearch.bind(this)}>
                        <Icon type="search"/>
                    </Button>
                </div>
            </InputGroup>
        );
    }
}
