import { ITodo } from '../interfaces/Todo'
import './Todo.css'
interface Props {
    todo: ITodo
}
function Todo({ todo }: Props) {
    return (
        <div className={`todo ${todo.isCompleted === true ? 'todo-complete' : ''}`}>
            <div className="todo-title">
                {todo.title}
            </div>
            <div className="actions">
                <button className='delete-button'>
                    X
                </button>
                {
                    !todo.isCompleted && <button className='complete-button'>
                        ✔
                    </button>
                }
            </div>
        </div>
    )
}
export default Todo