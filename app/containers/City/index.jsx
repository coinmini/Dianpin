import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import * as userInfoActionsForm0therFile from '../../actions/userinfo'
import LocalStore from '../../util/LocalStore.js'
import {CITYNAME} from '../../config/LocalStoreKey.js'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          data : ''
        }
    }


    render() {
        return (
            <div>
              <div>
                <Header title ="Chose District"/>
              </div>
              <div>
                <CurrentCity cityName = {this.props.userinfo.cityName}/>
              </div>
              <div>
                <CityList ChangeFn = {this.ChangeCity.bind(this)}/>
              </div>
            </div>
        )
    }

    ChangeCity(newCity){
      if(newCity == null) {
        return
      }

      const userinfo = this.props.userinfo
      userinfo.cityName = newCity
      this.props.userInfoActions.update(userinfo)

      LocalStore.setItem(CITYNAME, newCity)

      hashHistory.push('/')
    }


}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
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
)(City)
