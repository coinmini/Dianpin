import React from 'react'
import Header from '../../components/Header'
import LineChartExample from '../../components/chart/line'
import BarChartExample from '../../components/chart/bar'
import CalendarTool from '../../components/Calendar/'

class ChartData extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
              <Header title = 'DataHistory'/>

              <BarChartExample />
              <LineChartExample />
              <CalendarTool />

            </div>
        )
    }
}

 export default ChartData
