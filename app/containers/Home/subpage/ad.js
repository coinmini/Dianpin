import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          data: []
        }
    }

    componentDidMount(){
      const result = getAdData()
      result.then(response => response.json())
      .then(json => {
        const data2 = json
        if(data2.length){
          this.setState({
            data: data2
          })
        }
      })
    }


    render() {
        return (
          <div>
            {
              this.state.data.length
              ? <HomeAd adcontent = {this.state.data}/>
              : <div>loading</div>
            }
          </div>

        )
    }
}


 export default Ad
