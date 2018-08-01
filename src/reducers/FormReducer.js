import initalState from '../models/FormModel';
import { CONTRACTFORM_UPDATE_INPUT , CONTACTFORM_ADD_CONTACT } from '../actions/ContactFormActions';

export default function ContactFormReducer(state = initalState, action){
    const contacts = state.contacts
    const newContact = state.newContact
    switch (action.type) {
        case CONTRACTFORM_UPDATE_INPUT:
            newContact[action.name] = action.value 
            return {
                contacts: [...state.contacts],
                newContact: newContact
            }
        case CONTACTFORM_ADD_CONTACT:
            newContact.errors = {}
            if (!newContact.name) {
                newContact.errors.name = ["Please enter your new contact's name"];
            }
            if (!/.+@.+\..+/.test(newContact.email)) {
                newContact.errors.email = ["Please enter your new contact's email"];
            }
            if (Object.keys(newContact.errors) != 0){
                return {
                    newContact: newContact,
                    contacts: [
                        ...state.contacts
                    ]
                }
            }
            return {
                contacts : [
                    ...state.contacts, 
                    {
                        key: (contacts.length + 1),
                        name: newContact.name,
                        email: newContact.email,
                        description: newContact.description
                    }
                ],
                newContact : {
                    name: '',
                    email: '',
                    description: '',
                    errors: {}
                }
            }
        default:
            return state
    }
}
