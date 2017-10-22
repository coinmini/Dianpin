import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              <div>
                {this.props.isStore
                 ?<button onClick = {this.storeClickHandle.bind(this)}>collected</button>
                 :<button onClick = {this.storeClickHandle.bind(this)}>collect</button>}
              </div>
              <div>
                <button onClick={this.buyClickHandle.bind(this)}>purchase</button>
              </div>

            </div>
        )
    }


    storeClickHandle(){
      this.props.storeHandle()
    }

    buyClickHandle(){
      this.props.buyHandle()
    }


}
  export default BuyAndStore
