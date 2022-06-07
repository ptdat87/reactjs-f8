import { SET_TODO_INPUT, ADD_TODO } from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    let rs

    switch (action.type) {
        case SET_TODO_INPUT:
            rs = {
                ...state,
                todoInput: action.payload
            }
            // console.log('state ', state, 'rs ', rs)
            return rs
        case ADD_TODO:
            rs = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            return rs
        default:
            throw new Error(`Invalid action ${action.type}`)
    }
}

export { initState }
export default reducer