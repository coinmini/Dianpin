import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getInfoData } from '../../../fetch/detail/detai.js'
import DetailInfo from '../../../components/DetailList'

class DetailList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
          info:false
        }
    }
    render() {
        return (
            <div>
              {this.state.info
              ?<DetailInfo listcontent = {this.state.info}/>
              :'loading...'
              }
            </div>
        )
    }

  componentDidMount(){
    const id = this.props.id
    const result = getInfoData(id)

    this.resultHandle(result)
  }

  resultHandle(result){
    result.then(response =>response.json())
    .then(json => {
        this.setState({
          info:json
        })
      })
  }

}

  export default DetailList
