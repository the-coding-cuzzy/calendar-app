import { CLOSE_MODAL } from '../actions/AppointmentActions'
import { NEW_APPOINTMENT } from '../actions/CalendarActions'
import initalState from '../models/ModalModel';

export default function ModalReducer(state = initalState, action) {
  switch (action.type) {
    case NEW_APPOINTMENT:
      return {
        isShowing: true,
        startDate: action.startDate,
        endDate: action.endDate,
        resourceId: action.resourceId
      }
    case CLOSE_MODAL:
      return {
        isShowing: false
      }
    default:
      return state
	}

}
