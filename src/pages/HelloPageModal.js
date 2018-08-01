import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../static/modal.css";


class HelloPageModal extends Component {
  render() {
    let { message, onConfirm, onCancel, isShowing } = this.props

    return (
      <div className="confirm-modal">
        { isShowing &&
            <div className="modal-wrapper">
                <div className="modal">
                    <span >{message}</span>
                    <input type="text" ref={(_ref) => this.confirmInput = _ref}/>
                    <button className="btn" onClick={() => this.getTextAndConfirm()}>OK</button>
                    <button className="btn" onClick={() => onCancel()}>Cancel</button>
                </div>
          </div>
        }
      </div>
    )
  }

  getTextAndConfirm() {
    let text = this.confirmInput.value
    this.props.onConfirm(text)
  }

}

const mapStateToComponent = (state) => {
  return {
    isShowing: state.HelloModalReducer.modals.isShowing
  }
}

export default connect(mapStateToComponent)(HelloPageModal)