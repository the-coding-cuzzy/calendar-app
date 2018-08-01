import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNameAndHideModal, showModal, hideModal } from '../actions/HelloActions'
import HelloPageModal from './HelloPageModal'

class HelloPage extends Component {

  render() {
    let { showModal, onConfirm, hideModal, name } = this.props
    return (
      <div>
        <button className="btn" onClick={() => showModal("What your name?")}>Enter your name</button>
        <HelloPageModal message="'What your name?'" onConfirm={onConfirm} onCancel={hideModal}></HelloPageModal>
        { name &&
          <div className="name">
            {"Hello " + name}
          </div>
        }
      </div>
    )
  }
}

const mapStateToComponent = (state) => {
  return {
    name: state.HelloModalReducer.name
  }
}

const mapDispatchToComponent = (dispatch) => {
  return {
    showModal: (message) => dispatch(showModal(message)),
    onConfirm: (name) => dispatch(setNameAndHideModal(name)),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToComponent, mapDispatchToComponent)(HelloPage)