export const UPDATE_INPUT = 'UPDATE_INPUT'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const RESET = 'RESET'

export function handleChange(event){
    return {
        type: UPDATE_INPUT,
        name: event.target.name,
        value: event.target.value
    }
}

export function hideModal() {
    return {
      type: CLOSE_MODAL
    }
  }
  
  export function reset(){
    return {
        type: RESET
    }
  }