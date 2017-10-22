import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import DetailList from './subpage/detail-list'
import Comment from './subpage/comment-list'
import Buy from './subpage/Buy'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {

      const id = this.props.params.id
        return (
            <div>
              <Header title = "Detail"/>
              <DetailList id = {id}/>
              <Buy id = {id} />
              <Comment id = {id}/>
            </div>
        )
    }
}

 export default Detail
