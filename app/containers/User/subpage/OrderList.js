import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderListComponent from '../../../components/OrderList/'
import { getOrderListData, postComment} from '../../../fetch/user/orderlist'

import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          data :[]
        }
    }
    render() {
        return (
            <div className = "text-orderlist">
              <h2>your product</h2>
              {
                this.state.data.length
                ?  <OrderListComponent data = {this.state.data} submitComment = {this.submitComment.bind(this)}/>
                :'no history'
              }

            </div>
        )
    }

    componentDidMount(){
      const username = this.props.username
      if (username) {
          this.loadOrderList(username)
      }
    }

    loadOrderList(username){
      const result = getOrderListData(username)
        result.then(response => response.json())
        .then(json => {

            this.setState({
                data:json
            })
          }
          )
      }

      submitComment(id, value, callback){
        const result = postComment(id,value)
        result.then(response =>response.json())
        .then(json => {
            callback()
        })

      }




}

 export default OrderList
