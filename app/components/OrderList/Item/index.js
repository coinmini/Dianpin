

  import React from 'react'
  import PureRenderMixin from 'react-addons-pure-render-mixin'
  import {Link} from 'react-router'

  import './style.less'

  class Item extends React.Component {
      constructor(props, context) {
          super(props, context);
          this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
          this.state= {
            commentState: 2
          }
      }
      render() {
        const data = this.props.data

          return (
            <div   className = "order-list clear-fix">
              <div className = "float-left">
                <img src = {data.img} alt = "img"></img>
              </div>

              <div className = "order-content">
                <div>
                  <span>{data.title}</span>
                </div>
                <div>
                  <span>number：{data.count}</span>
                </div>
                <div>
                  <span>price：{data.price}</span>
                </div>
              </div>
              <div className="order-item-comment float-left">
                {
                  this.state.commentState === 0
                  ? <button onClick={this.showComment.bind(this)}>detail</button>
                  :   this.state.commentState === 1
                      ? ''
                      : <button className = "btn-unselected">detail</button>
                }

              </div>

              <div>
                {
                  this.state.commentState === 1
                  ? <div className = "comment">
                      <textarea ref = "commentText"></textarea>
                      <button onClick={this.submitClickHandle.bind(this)}>提交</button>
                      <button onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                  :''
                }
              </div>
            </div>
          )
      }

      showComment(){
        this.setState({
          commentState:1
      })
    }

    hideComment(){
      this.setState({
        commentState:0
    })
  }

  submitClickHandle(){
    const submitComment = this.props.submitComment
    const id = this.props.data.id
    const commentTextDOM = this.refs.commentText
    const value = commentTextDOM.value.trim()
    if(!value){
      return
    }

    submitComment(id, value, this.commentOK.bind(this))

}

  commentOK(){
    this.setState({
      commentState:2
  })
  }

      componentDidMount(){
        this.setState({
          commentState:this.props.data.commentState
        })
      }
  }

   export default Item
