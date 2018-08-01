import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/AppointmentActions'
import moment from 'moment'

class AppoinmentModal extends Component {

  onBookingClick(event) {
    event.preventDefault()
    let { appointment, startDate, endDate, resourceId, onConfirm  } = this.props
    onConfirm(appointment, startDate, endDate, resourceId)
  }

  render() {
    let { appointment, startDate, endDate, resourceId, cancel, isShowing, handleChange } = this.props
    var errors = appointment.errors || {}
    var momentStart = moment(startDate)
    var momentEnd = moment(endDate)
    return (
      <div className="confirm-modal">
        { isShowing &&
          <div className="modal-wrapper">
            <div className="modal">
                <form className='ContactForm'>
                  <div className="ContactName">
                    <label>Name: </label>
                    <input className={appointment.errors.name && 'ContactForm-error'}  name="name" type='text' onChange={handleChange}/>
                  </div>
                  <div className="ContactName">
                    <label>Time: </label>
                    <input className='time' name="email" disabled='disabled' value={`${momentStart.format("hh:mm")} - ${momentEnd.format("hh:mm")}`}/>
                  </div>
                  <div className="ContactName">
                    <label>Condition: </label>
                    <input className={appointment.errors.name && 'ContactForm-error'} name="condition" type='text' onChange={handleChange}/>
                  </div>
                  <div className="buttons">
                    <button className="btn" onClick={(event) => this.onBookingClick(event)}>Book</button>
                    <button className="btn" onClick={cancel}>Cancel</button>
                  </div>
                </form>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.ModalReducer.isShowing,
    startDate: state.ModalReducer.startDate,
    endDate: state.ModalReducer.endDate,
    resourceId: state.ModalReducer.resourceId,
    appointment: state.AppointmentReducer.appointment
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
          handleChange: (event) => dispatch(actions.handleChange(event)),
          cancel : () => dispatch(actions.hideModal())
      }
}

export default connect(mapStateToComponent, mapDispatchToProps)(AppoinmentModal)