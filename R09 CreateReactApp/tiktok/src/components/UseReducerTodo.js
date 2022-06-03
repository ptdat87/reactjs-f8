import { useCallback, useReducer, useRef, useState } from "react"
//useReducer
//1.Init state
const initState = {
    job: '',
    jobs: []
}

//2.Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

//3.Reducer function
const reduce = (state, action) => {
    console.log('Action: ', action)
    console.log('Prev state: ', state)
    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error(`Invalid action ${action.type}`)
    }

    console.log('New State', newState)
    return newState;
}

function UseReducerTodo() {
    const [state, dispatch] = useReducer(reduce, initState)
    const { job, jobs } = state
    const refInput = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        refInput.current.focus()
    }

    return (
        <div stype={{ padding: 20 }}>
            <h3>Todo</h3>
            <input
                ref={refInput}
                value={job}
                placeholder="Enter todos..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }
                }
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )

}


export default UseReducerTodo;