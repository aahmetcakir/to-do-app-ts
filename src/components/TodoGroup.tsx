import { ITodos } from "../interfaces/Todos";
import Todo from "./Todo";
import './TodoGroup.css'
interface Props {
    todos: ITodos
}

function TodoGroup({ todos }: Props) {
    const completedTodos = todos.data.filter(todo => todo.isCompleted === true)
    const uncompletedTodos = todos.data.filter(todo => todo.isCompleted === false)

    return (
        <>
            <div className={`group-name uncomplete`}
            >
                Uncomplete
            </div>
            <div className="group">
                {
                    uncompletedTodos.map((todo, i) => {
                        return (
                            <Todo key={i} todo={todo} />
                        )
                    })
                }
            </div>
            <div className={`group-name complete`}
            >
                Complete
            </div>
            <div className="group">
                {
                    completedTodos.map((todo, i) => {
                        return (
                            <Todo key={i} todo={todo} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoGroup