import initalState from '../models/AppointmentModel';

import { UPDATE_INPUT,RESET } from '../actions/AppointmentActions'

export default function AppointmentReducer(state = initalState, action) {
  const appointment = state.appointment

  switch (action.type) {
    case RESET:
      return {
        appointment : {
          name: '',
          condition: '',
          errors: {}
        }
      }
    case UPDATE_INPUT:
      appointment[action.name] = action.value 
      return {
          appointment: appointment
      }
    default:
      return state
  }

}
