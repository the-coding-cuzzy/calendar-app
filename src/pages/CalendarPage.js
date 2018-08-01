import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import {connect} from 'react-redux'
import moment from 'moment';
import * as actions from '../actions/CalendarActions'
import { bindActionCreators } from 'redux';
import AppoinmentModal from './AppoinmentModal'
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

/*Agenda Rendering*/
//Outside the class
function Event({ event }) {
  return (
  <span>
    <strong>
    {event.title}
    </strong>
    { event.desc && (':  -' + event.desc)}
  </span>
  )
}

function EventAgenda({ event }) {
  return <span>
  <em style={{ color: 'magenta'}}>
    {event.title}
  </em>
  <p>
    { event.desc }
  </p>
</span>
}


class CalendarPage extends Component {
  constructor(props) {
    super(props);
  }

    /* When you click on an already booked slot */
  onEventClick(event, resource){
    console.log(event) //Shows the event details provided while booking
    console.log(resource)
  }

  render() {
    const { events, resourceMap, addEventClick, newAppointment, onConfirm } = this.props;
    console.log(events)
    return (
      <div>
        <BigCalendar
          selectable
          onSelectEvent={(event) => this.onEventClick(event)}
          onSelectSlot={ newAppointment }
          events={events}
          defaultView="day"
          views={['day', 'work_week']}
          step={60}
          timeslots={2}
          defaultDate={new Date()}
          resources={resourceMap}
          resourceAccessor="resourceId"
          resourceIdAccessor="id"
          resourceTitleAccessor="resourceTitle"
        />
        <AppoinmentModal onConfirm={onConfirm}></AppoinmentModal>
      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
      events: state.CalendarReducer.events,
      resourceMap: state.CalendarReducer.resourceMap
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
      // onIncreaseClick: () => dispatch(actions.increaseTodo()),
      onConfirm: (appointment, startDate, endDate, resourceId) => dispatch(actions.bookAppointment(appointment, startDate, endDate, resourceId)),
      addEventClick: (event) => dispatch(actions.addEvent(event)),
      newAppointment: (event) => dispatch(actions.newAppointment(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
