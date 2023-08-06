import './AddTodo.css'
interface Props {
    setTodo(title: string): void
    addTodo(): void
    todo: string
}

function AddTodo({ setTodo, addTodo, todo }: Props) {
    return (
        <div className='add-todo'>
            <form onSubmit={(e) => addTodo(e)}
                className='add-todo'
            >
                <input type="text"
                    className="todo-input"
                    placeholder="Create a new todo..."
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <input
                    type="submit"
                    value="Add"
                    className="todo-button"
                />
            </form>
        </div>
    )
}
export default AddTodo