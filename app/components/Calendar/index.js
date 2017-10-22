import React from 'react'
import { DateRange } from 'react-date-range'

class CalendarTool extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSelect(date){
        console.log(date); // Momentjs object
    }




    render() {
        return (
          <div style={{paddingLeft:'50px', backgroundColor:'#fff'}}>
            <DateRange
                      onInit={this.handleSelect}
                      onChange={this.handleSelect}
                  />
          </div>

        )
    }
}

 export default CalendarTool
