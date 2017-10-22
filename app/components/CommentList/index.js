import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'

import './style.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const data = this.props.data
        return (
            <div >
              <h3>user comment</h3>
              {data.map((item,index)=>(
                <div key ={index} className= "comment-list clear-fix">
                  <Star star ={item.star} className= "float-left"/>
                  <span className="float-right">
                    <i className ='icon-user'></i>
                    {item.username}
                  </span>
                  <div className= "text-comment">
                        {item.comment}
                  </div>


                </div>
              ))}
            </div>
        )
    }
}

 export default CommentList
