import { ITodo } from "../interfaces/Todo";
import Todo from "./Todo";
import './TodoGroup.css'

interface Props {
    todos: Array<ITodo>
    removeTodo(todo: ITodo): void
    markAsComplete(todo: ITodo): void
}

function TodoGroup({ todos, removeTodo, markAsComplete }: Props) {
    const completedTodos = todos.filter(todo => todo.isCompleted === true)
    const uncompletedTodos = todos.filter(todo => todo.isCompleted === false)

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
                            <Todo key={i} todo={todo}
                                removeTodo={removeTodo}
                                markAsComplete={markAsComplete}
                            />
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
                            <Todo
                                key={i}
                                todo={todo}
                                removeTodo={removeTodo}
                                markAsComplete={markAsComplete}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoGroup