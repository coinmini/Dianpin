import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const data = this.props.data

        return (
          <div className="list-item clear-fix">
            <Link to = {'/detail/' + data.id } style={{ textDecoration: 'none' }}>
              <div className="item-img-container float-left">
                  <img src={data.img} alt={data.title}/>
              </div>
              <div className="item-content">
                  <div className="item-title-container clear-fix">
                      <h4 className="float-left">{data.title}</h4>
                      <span className="float-right">{data.distance}</span>
                  </div>
                  <p className="item-sub-title float-left" >
                      {data.subTitle}
                  </p>
                  <div className="item-price-container clear-fix">
                      <span className="price float-left">${data.price}</span>
                      <span className="mumber float-right">sold{data.mumber}</span>
                  </div>
              </div>
            </Link>
          </div>
        )
    }
}

 export default Item
