import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory } from 'react-router'
import SearchInput from '../SearchInput/'

import './style.less'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id = "search-header" className="clear-fix">
              <div className= "search-header-back float-left">
                 <span onClick= {this.clickHandle.bind(this)}>
                  <i className = "icon-chevron-left"></i>
                </span>
              </div>
              <div className = "search-header-input">
                <i className="icon-search"></i>
                &nbsp;
                <SearchInput value = {this.props.keyword || ''} enterHandle = {this.enterHandle.bind(this)}/>
              </div>
            </div>
        )
    }


    clickHandle(){
      window.history.back()
    }

    enterHandle(value){
      hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

  export default SearchHeader
