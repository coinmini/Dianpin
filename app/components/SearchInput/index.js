import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'


class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          value : ''
        }
    }

    changeHandle(e){
      this.setState({
        value:e.target.value
      })
    }

    keyHandle(e){
      if(e.keyCode !== 13) {
        return
      }
    this.props.enterHandle(this.state.value)
    }


    componentDidMount(){
      this.setState({
        value: this.props.value || ''
      })
    }

    render() {
        return (
            <input
              className = "search-input"
              placeholder = "key word here"
              value = {this.state.value}
              onChange = {this.changeHandle.bind(this)}
              onKeyUp = {this.keyHandle.bind(this)}
            />
        )
    }


}

 export default SearchInput
