import React, { Component } from 'react'

import { ScheduleComponent, Inject, Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop,ViewsDirective,ViewDirective } from '@syncfusion/ej2-react-schedule';
//import { SampleBase } from '../common/sample-base';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

export class ScheduleComponent1 extends Component {
    constructor() {
        super(...arguments);
        this.dataManger = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
            adaptor: new WebApiAdaptor,
            crossDomain: true
        });
    }

    change(args) {
        this.scheduleObj.selectedDate = args.value;
        this.scheduleObj.dataBind();
    }
    onDragStart(args) {
        args.navigation.enable = true;
    }
    render() {
        return (<div className='schedule-control-section'>
        <div className='col-lg-9 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent height='650px' ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2017, 5, 5)} eventSettings={{ dataSource: this.data }} dragStart={(this.onDragStart.bind(this))}>
              <ViewsDirective>
                <ViewDirective option='Day' startHour='09:00' endHour = '06:00'/>
                <ViewDirective option='Week' />
                <ViewDirective option='WorkWeek'/>
                <ViewDirective option='Month'/>
                <ViewDirective option='Agenda'/>
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
        <div className='col-lg-3 property-section'>
          {/* <PropertyPane title='Properties'>
            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
              <tbody>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '30%' }}>
                    <div className='col-md-4' style={{ paddingTop: '8px' }}>Current Date</div>
                  </td>
                  <td style={{ width: '70%' }}>
                    <div className='datepicker-control-section'>
                      <DatePickerComponent value={new Date(2019, 0, 10)} showClearButton={false} change={this.change.bind(this)}></DatePickerComponent>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane> */}
        </div>
      </div>);
    }
}

export default ScheduleComponent1

