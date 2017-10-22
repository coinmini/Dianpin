import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class UserTitle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

        return (
            <div className="user-title clear-fix">
              <div>
                <i className="icon-user"></i>
                <span>usename：{this.props.username}</span>
              </div>
              <div>
                <i className="icon-map-marker"></i>
                <span>district：{this.props.cityname}</span>
              </div>

            </div>
        )
    }
}

 export default UserTitle
