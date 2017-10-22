import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import ReactSwipe from 'react-swipe';

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          index2 : 0,
        }
    }

    render() {
        return (
          <div id="home-category">
                <div className="carousel-item">
                    <ul className="clear-fix">
                      <Link to ='/History'>
                        <li className="float-left Insurance">Insurance</li>
                      </Link>
                        <li className="float-left Funds">Funds</li>
                        <li className="float-left Retirement">Retirement</li>
                        {/* <li className="float-left LTC">LTC</li> */}
                        <li className="float-left Education">Education</li>
                    </ul>

                </div>
          </div>

        )

    }
}


 export default Category
