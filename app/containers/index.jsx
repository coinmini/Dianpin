import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/LocalStore.js'
import {CITYNAME} from '../config/LocalStoreKey.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsForm0therFile from '../actions/userinfo'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          initDone : false,
        }
    }

    componentDidMount(){

       let cityName = LocalStore.getItem(CITYNAME);
      if (cityName == null) {
          cityName = 'China'
      }

    this.props.userInfoActions.update({
      cityName: cityName
    });

      setTimeout(()=>{
        this.setState({initDone : true});
      },500)
    };

    render() {
        return (
            <div>
              {
              this.state.initDone
              ?this.props.children
              :<div>loading...</div>
              }

            </div>
        )
    }
}

function mapStateToProps(state){
   return{
   }
}

function mapDispatchToProps(dispatch){
    return{
      userInfoActions:bindActionCreators(userInfoActionsForm0therFile,dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
