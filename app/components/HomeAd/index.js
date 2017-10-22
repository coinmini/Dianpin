import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const data = this.props.adcontent
    return (
      <div id="home-ad">
        <h2>Hot Product</h2>
        <div className="ad-container clear-fix">
          <img src = "https://3.bp.blogspot.com/-U3y5PgebTqQ/WV8DG7y_NnI/AAAAAAAAGBA/wVAXWOng21UlD4arAwhqh4N3SJKw1vEaQCLcBGAs/s1600/ALLSTATE.png"  title="A strawberries image"/>
          <img src = "https://3.bp.blogspot.com/-p8kglJrcxAk/WWJAIctSGaI/AAAAAAAAGB8/UHMIaKotNwsXNMgCNAcsyo-sA-rcLA7RACLcBGAs/s1600/metlife.jpg"  title="A strawberries image"/>
          <img src = "https://3.bp.blogspot.com/-tU1M_oMzdPk/WWJAKdn5BxI/AAAAAAAAGCE/NoAhL0uqBRs1yj7KsxYqBmfq2MZk_NhzgCLcBGAs/s1600/boltinsurance.png"  title="A strawberries image"/>
          <img src = "https://2.bp.blogspot.com/-S23EQFjIUEw/WV8DHEItMRI/AAAAAAAAGBQ/NJeXwe4F2tokm0ECmPq_i9vJVnbRE8ONACLcBGAs/s1600/mc-youinvest.jpg"  title="A strawberries image"/>
          <img src = "https://4.bp.blogspot.com/-RTb9a_DDZfo/WV8DG9Fwz0I/AAAAAAAAGBM/-nKS1WerU0IPFYrT1XOZxhVEMG2IIsU9wCLcBGAs/s1600/Product-Disclosure-Statement-GPS-Invest-Access-Fund-April-2017-450x338.jpg"  title="A strawberries image"/>
          <img src = "https://4.bp.blogspot.com/-vNMCBTE7muU/WWJAKXESTLI/AAAAAAAAGCA/FS5FnZcTDtsw-jBRYoAQhRCakSjD0P4jQCLcBGAs/s1600/nationwide.pngg"  title="A strawberries image"/>


        </div>
      </div>

    )
  }
}

export default HomeAd
