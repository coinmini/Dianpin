import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home.js'
import {connect} from 'react-redux'
import HomeList from '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          data : [],
          hasMore: false,
          isLoadingMore: false,
          page: 1
        }
    }

    componentDidMount(){
       this.loadFirstPageDate()
    }

    loadFirstPageDate(){
      const cityName = this.props.cityName
      const result =getListData(cityName,0)
      this.resultHandle(result)
    }

    loadMoreData(){

      this.setState({
        isLoadingMore: true
      })

      const cityName = this.props.cityName
      const page2 = this.state.page
      const result =getListData(cityName,page2)
      this.resultHandle(result)

      this.setState({
        page : page2+1,
        isLoadingMore: false
      })
    }


    resultHandle(result){
      result.then(response => response.json())
      .then(json => {
        const data2 = json.data
        const hasMore2 = json.hasMore
        if(data2.length){
          this.setState({
            data: this.state.data.concat(data2),
            hasMore: hasMore2
          })
        }
      })
    }


    render() {
        return (
            <div>

              <h2 className = "home-list-title">More...</h2>
              {
                this.state.data.length
                ? <HomeList listcontent = {this.state.data}/>
                : <div>loading</div>
              }

              {
                this.state.hasMore
                ?<LoadMore isLoadingMore = {this.state.isLoadingMore} loadMoreFn = {this.loadMoreData.bind(this)}/>
                :''
              }

            </div>
        )
    }
}


function mapStateToProps(state){
   return{
     userinfo: state.userinfo
   }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
