import { ITodo } from '../interfaces/Todo'
import './Todo.css'
interface Props {
    todo: ITodo
    removeTodo(todo: ITodo): void
    markAsComplete(todo: ITodo): void
}

function Todo({ todo, removeTodo, markAsComplete }: Props) {
    return (
        // todo
        <div className={`todo ${todo.isCompleted ? 'todo-complete' : ''}`}>
            <div className="todo-title">
                {todo.title}
            </div>
            <div className="actions">
                <button className='delete-button'
                    onClick={() => removeTodo(todo)}
                >
                    X
                </button>
                {
                    !todo.isCompleted && <button className='complete-button'
                        onClick={() => markAsComplete(todo)}
                    >
                        ✔
                    </button>
                }
            </div>
        </div>
    )
}
export default Todo