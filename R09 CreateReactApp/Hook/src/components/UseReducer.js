import { useReducer } from "react"
//1.useState when:
// Simple data type 
//(2 step)
//a.Init state
//b.Actions: up (state + 1)/down (state-1)

//2.useReducer when:
// Complex data type
// Nested structure
//(4 step)
//a.Init state
//b.Actions: up (state + 1)/down (state-1)
//c.Reducer
//d.Dispatch


//a.Init state
const initState = 0
//b.Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
//c.Reducer
const reduce = (state, action) => {
    console.log('Reducer running...')
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error(`Invalid action ${action}`)
    }
}


function UseReducer() {
    const [count, dispatch] = useReducer(reduce,initState)

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    )
};

export default UseReducer;