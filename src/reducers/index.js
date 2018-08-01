import { combineReducers } from 'redux';

import CountReducer from './CountReducer';
import CalendarReducer from './CalendarReducer';
import FormReducer from './FormReducer';
import AppointmentReducer from './AppointmentReducer';
import ModalReducer from './ModalReducer';
import HelloModalReducer from './HelloModalReducer'

export const rootReducer = combineReducers({
    CountReducer,
    CalendarReducer,
    FormReducer,
    AppointmentReducer,
    ModalReducer,
    HelloModalReducer
});