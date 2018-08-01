export const CONTRACTFORM_UPDATE_INPUT = 'CONTRACTFORM_UPDATE_INPUT'
export const CONTACTFORM_ADD_CONTACT = 'CONTACTFORM_ADD_CONTACT'

export function handleChange(event){
    return {
        type: CONTRACTFORM_UPDATE_INPUT,
        name: event.target.name,
        value: event.target.value
    }
}

export function addContact(values){
    console.log(values)
    values.preventDefault()
    return {
        type: CONTACTFORM_ADD_CONTACT,
        name: values.name,
        email: values.email,
        description: values.description
    }
}