export const NEW_APPOINTMENT = 'NEW_APPOINTMENT'
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT'

import {hideModal, reset} from './AppointmentActions'

export function newAppointment(event) {
  return {
    type: NEW_APPOINTMENT,
    startDate: event.start,
    endDate: event.end,
    resourceId: event.resourceId
  }
}

export function addAppointment(appointment, startDate, endDate, resourceId){
  console.log("ADDING APPOINTMETN")
  return {
      type: ADD_APPOINTMENT,
      name: appointment.name,
      startDate: startDate,
      endDate: endDate,
      condition: appointment.condition,
      resourceId: resourceId
  }
}

export function bookAppointment(appointment, startDate, endDate, resourceId) {
  return (dispatch) => {
    if (!appointment.name || appointment.name.trim() === '') return
    if (!appointment.condition || appointment.condition.trim() === '') return
    dispatch(addAppointment(appointment, startDate, endDate, resourceId))
    dispatch(hideModal())
    dispatch(reset())
  }
}

