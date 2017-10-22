import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    loadMoreHandle(){
      this.props.loadMoreFn()
    }

    componentDidMount(){

      let timeoutId
      const wrapper = this.refs.wrapper
      const loadMoreFn = this.props.loadMoreFn
      function callback(){
        const top = wrapper.getBoundingClientRect().top
        const windowHeight = window.screen.height

        if(top && top < windowHeight)
          loadMoreFn()
      }

      window.addEventListener('scroll', function(){

        if(this.props.isLoadingMore){
          return
        }

        if(timeoutId) {
          clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(callback,500)

      }.bind(this),false)
    }

    render() {


        return (
          <div className = "load-more" ref = "wrapper">

            {this.props.isLoadingMore
            ?<span>loading...</span>
            :<span onClick = {this.loadMoreHandle.bind(this)}>loading more</span>
            }

          </div>
        )
    }
}

  export default LoadMore
