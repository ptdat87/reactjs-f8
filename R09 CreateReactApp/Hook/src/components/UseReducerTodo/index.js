import { useReducer, useRef } from "react"
import { addJob, deleteJob, setJob } from "./action"
//TODO: import reduce, { initState } from "./reducer"


//useReducer
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