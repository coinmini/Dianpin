import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import UserTitle from '../../components/UserTitle'
import OrderList from './subpage/OrderList.js'
import {connect} from 'react-redux'




class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title = "usercenter" backRouter ="/"/>
                <UserTitle username = {this.props.userinfo.username} cityname= {this.props.userinfo.cityName}/>
                <OrderList username = {this.props.userinfo.username} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
