import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/ContactFormActions'
import { bindActionCreators } from 'redux';
import "../static/form.css";

class ContactForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {newContact, contacts, addContactClick, handleChange} = this.props
        var errors = newContact.errors || {}
        return (
            <div>
                <form className='ContactForm'>
                    <input className={errors.name && 'ContactForm-error'} name="name" type='text' placeholder='Name (required)' onChange={handleChange}/>
                    <input className={errors.email && 'ContactForm-error'} name="email" type='text' placeholder='Email (required)' onChange={handleChange}/>
                    <input name="description" type='text' placeholder='Description' onChange={handleChange}/>
                    <button onClick={addContactClick}>Add Contact</button>
                </form>
                <div>
                    <ul className='ContactList'>
                        {
                            contacts.map(contact => {
                                return (
                                    <li className='ContactView' key={contact.key}>
                                        <h2 className='ContactName'>{contact.name}</h2>
                                        <a className='ContactEmail' href={`mailto:${contact.email}`}> {contact.email}</a>
                                        <div className='ContactDesc'>{contact.description}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        contacts: state.FormReducer.contacts,
        newContact: state.FormReducer.newContact
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
            addContactClick: (values) => dispatch(actions.addContact(values)),
            handleChange: (event) => dispatch(actions.handleChange(event))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
  