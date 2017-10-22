import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeList from '../../../components/HomeList/'
import LoadMore from '../../../components/LoadMore'
import {connect} from 'react-redux'
import {getSearchData} from '../../../fetch/search/search.js'

const initialState = {
  data:[],
  hasMore:false,
  isLoadingMore:false,
  page:0
}
class SearchList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state=initialState
    }


    render() {
        return (
          <div>
            {this.state.data.length
            ?<HomeList listcontent = {this.state.data}/>
            :'loading...'
            }
            {this.state.isLoadingMore
              ? <span>loading...</span>
              : <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn ={this.loadMoreFn.bind(this)}/>

            }
          </div>
        )
    }


    componentDidMount(){
      this.loadFirstPageData()
    }

    loadFirstPageData(){
     const cityName = this.props.userinfo.cityName
     const category = this.props.catrgory
     const keyword = this.props.keyword
     const result = getSearchData(0, cityName, category, keyword )
     this.resultHandle(result)
    }

    loadMoreFn(){

      this.setState({
          isLoadingMore: true
      })
      const page = this.state.page
      const cityName = this.props.userinfo.cityName
      const category = this.props.catrgory
      const keyword = this.props.keyword
      const result = getSearchData(page, cityName, category, keyword )
      this.resultHandle(result)

      this.setState({
        page: this.state.page +1,
        isLoadingMore: false
      })
    }


    resultHandle(result){
      result.then(response => response.json())
      .then(json => {
        const data = json.data
        const hasMore = json.hasMore
        if(data.length) {
          this.setState({
            data: this.state.data.concat(data),
            hasMore: hasMore
          })
        }
      })
    }

    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this.loadFirstPageData()
    }

}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)
