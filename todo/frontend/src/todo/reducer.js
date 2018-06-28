const INITIAL_STATE = {
    description: '', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case 'TODO_CLEAR':
            return {
                ...state,
                description: '',
            };
        
        case 'TODO_SEARCHED':
            return {
                ...state,
                list: action.payload
            }
        case 'DESCRIPTION_CHANGE':
            return {
                ...state,
                description: action.payload,
            }
        default:
            return state

    }
}