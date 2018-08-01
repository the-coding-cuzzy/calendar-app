import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/CounterActions'

class CounterPage extends Component {
    render() {
        const {count, wish_value, onIncreaseClick, onUpdateClick} = this.props
        return (
            <div>
                <span>{count}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <input value={wish_value} type='text' onChange={onUpdateClick}/>
            </div>
        )
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.CountReducer.count,
        wish_value: state.CountReducer.wish_value
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(actions.increaseTodo()),
        onUpdateClick: event => dispatch(actions.updateTodo(event.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);