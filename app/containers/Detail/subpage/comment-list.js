import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detai.js'
import CommentList from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
          data : [],
          hasMore: false,
          page: 0,
          isLoadMore: false
        }
    }
    render() {
        return (
            <div>
             {this.state.data.length
             ?<CommentList data = {this.state.data}/>
             :'loading...'}

             {
               this.state.hasMore
               ?<LoadMore isLoadingMore = {this.state.isLoadingMore} loadMoreFn = {this.loadMoreData.bind(this)}/>
               :''
             }

            </div>
        )
    }


  componentDidMount(){
    this.loadFirstPageData()
  }

  loadFirstPageData(){
    const page = this.state.page
    const id = this.props.id
    const result = getCommentData(page,id)
    this.resultHandle(result)
  }


  loadMoreData(){

    this.setState({
      isLoadMore:true
    })

    const page = this.state.page
    const id = this.props.id
    const result = getCommentData(page,id)
    this.resultHandle(result)

    this.setState({
      page: this.state.page +1,
      isLoadMore:false
    })

  }


  resultHandle(result){
    result.then(response =>response.json())
    .then(json => {
      const data = json.data
      const hasMore = json.hasMore
      if(data.length){
        this.setState({
          data:this.state.data.concat(data),
          hasMore: hasMore
        })
      }

      })
  }
}

 export default Comment
