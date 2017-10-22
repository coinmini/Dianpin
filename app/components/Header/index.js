import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="header" className = "clear-fix">
              <div className="header-left float-left" onClick= {this.clickHandle.bind(this)}>
                <i className= "icon-chevron-left"></i>
              </div>
              <div className = "header-text">
                <span>{this.props.title}</span>
              </div>
            </div>
        )
    }


    clickHandle(){
      const backRouter = this.props.backRouter
      if(backRouter) {
        hashHistory.push("/")
      } else {
        window.history.back()
      }

    }
}

 export default Header
