import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id = "city-list" className = "clear-fix">
              <div className = "spantext">
                   FINACIAL DISTRICT
              </div>
              <div>
                <ul>
                  <li>
                  <span onClick = {this.clickHandle.bind(this,'China')}>China</span>
                  </li>
                  <li>
                  <span onClick = {this.clickHandle.bind(this,'US')}>US</span>
                  </li>
                  <li>
                  <span onClick = {this.clickHandle.bind(this,'UK')}>UK</span>
                  </li>
                  <li>
                  <span onClick = {this.clickHandle.bind(this,'AU')}>AU</span>
                  </li>
                  <li>
                  <span onClick = {this.clickHandle.bind(this,'JP')}>JP</span>
                  </li>
                  <li>
                  <span onClick = {this.clickHandle.bind(this,'CA')}>CA</span>
                  </li>
                </ul>
              </div>
              <div className='worldMap'>
                <img src = "https://1.bp.blogspot.com/-uH548vjMsNs/WWLrO-lQ8_I/AAAAAAAAGCU/_kmSwwgRTt8eMIzDTTpK7ha5-9jkRTIQgCLcBGAs/s1600/map.JPG" alt='map'
                style={{
                  width:'400px',
                  height:'300px',
                  marginTop: '20px',
                  marginBottom: '20px',
                }} />
              </div>
            </div>
        )
    }

  clickHandle(newCity){
    const ChangeFn = this.props.ChangeFn
    ChangeFn(newCity)
  }


}

  export default CityList
