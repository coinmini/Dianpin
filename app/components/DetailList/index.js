import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'


import './style.less'

class DetailInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const data = this.props.listcontent

    return (
      <div className="list-item clear-fix">
        <div className="item-img-container float-left">
            <img src={data.img} alt={data.title}/>
        </div>
        <div className="item-content">
            <div className="item-title-container clear-fix">
                <h4 className="float-left">{data.title}</h4>
                <Star star = {data.star}/>
            </div>
            <p className="item-sub-title">
                {data.subTitle}
            </p>
            <div>
                <span className="float-left">price：{data.price}</span>
            </div>
            <div className="text-desc clear-fix">
                <span dangerouslySetInnerHTML={{__html:data.desc}} className="float-left"></span>
            </div>
        </div>
      </div>






    )
  }
}

export default DetailInfo
