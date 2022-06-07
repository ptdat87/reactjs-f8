import { useStore, actions } from "./index";

function UseContextTodo() {
    // console.log(useStore)
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    // console.log(useStore())
    // console.log(useStore)

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }

    return (
        <div>
            <input value={todoInput}
                placeholder="enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </div>
    );
}

export default UseContextTodo;