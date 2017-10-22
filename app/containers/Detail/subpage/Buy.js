import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import BuyAndStore  from '../../../components/BuyAndStore'
import {hashHistory} from 'react-router'
import * as storeActionsFormFile  from '../../../actions/store'
import {bindActionCreators} from 'redux'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
          isStore: false
        }
    }


    render() {
        return (
          <div>
            <BuyAndStore
              isStore = {this.state.isStore}
              buyHandle = {this.buyHandle.bind(this)}
              storeHandle = {this.storeHandle.bind(this)}/>
          </div>
        )
    }

    componentDidMount(){
      this.checkStoreState()
    }

    checkStoreState(){
      const id =this.props.id
      const store = this.props.store

      store.some(item =>{
        if(item.id ===id){
          this.setState({
            isStore:true
          })
          return true
        }
      })
      }

    buyHandle(){
      const buyFlag = this.loginCheck()
      if(!buyFlag){
        return
      }
      hashHistory.push('/User')
    }

    storeHandle(){
      const buyFlag = this.loginCheck()
      if(!buyFlag){
        return
      }

      const id = this.props.id
      const storeActions = this.props.storeActions
      if(this.state.isStore) {
        storeActions.rm({id:id})
      } else {
        storeActions.add({id:id})
      }

      this.setState({
        isStore: !this.state.isStore
      })
    }

    loginCheck(){
      const id = this.props.id
      const userinfo = this.props.userinfo
      if (!userinfo.username) {
        hashHistory.push('/login/' + encodeURIComponent('detail/' + id))
        return false
      }
      return true
    }
}




function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,    // reducer store里面有两个reducer，一个是usernfo一个是store，所以会对应两个state对象
        store: state.store
    }
}

function mapDispatchToProps(dispatch){
    return{
      storeActions:bindActionCreators(storeActionsFormFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
