import axios from 'axios';
const URL = `http://localhost:3003/api/todos`

export const changeDescription = event => {
    console.log("Action change description");
    return {
        type: 'DESCRIPTION_CHANGE',
        payload: event.target.value,
    }
    
}

export const add = (description) => {
    return dispatch => {
        axios.post(`${URL}`, { description })
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }

}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [
        { type: 'TODO_CLEAR' }, 
        search()
    ]
}

export const removeItem = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

// export const clean

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const term = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${term}`)
            .then(resp => dispatch({
                type: 'TODO_SEARCHED',
                payload: resp.data
            }))
        
    }
    
}