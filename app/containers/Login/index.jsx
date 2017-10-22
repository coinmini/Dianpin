import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/LoginComponent'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="login"/>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(newUser) {
        // 保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo  // store里面的变量都是父组件，包括actino
        userinfo.username = newUser   // 这个是 子组件输入用户名的时候的值
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到指定的页面
            hashHistory.push(router)
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }
    goUserPage() {
        hashHistory.push('/User')
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo   //store里面的state里面的userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)   //action文件夹里面的， userinfo action和dispatch绑定
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
