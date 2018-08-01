import initalState from '../models/CalendarModel';
import { ADD_APPOINTMENT } from '../actions/CalendarActions';

export default function CalendarReducer(state = initalState, action){
    const events = state.events
    const resourceMap = state.resourceMap
    switch (action.type) {
        case ADD_APPOINTMENT:
            return {
                events : [
                    ...state.events, 
                    {
                        id: (events.length + 1),
                        title: action.name,
                        start: action.startDate,
                        end: action.endDate,
                        resourceId: action.resourceId
                    }
                ],
                resourceMap :[...state.resourceMap]
            }
        default:
            return state
    }
}
