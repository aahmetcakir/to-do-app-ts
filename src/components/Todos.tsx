import { ITodos } from '../interfaces/Todos'
import TodoGroup from './TodoGroup'
import './Todos.css'

function Todos() {

    const todos: ITodos = {
        data: [
            {
                title: 'Deneme',
                isCompleted: false
            },
            {
                title: 'Deneme',
                isCompleted: false
            },
            {
                title: 'Deneme',
                isCompleted: false
            },
            {
                title: 'Deneme',
                isCompleted: false
            },
            {
                title: 'Deneme2 ',
                isCompleted: true
            },
            {
                title: 'Deneme2 ',
                isCompleted: true
            },
            {
                title: 'Deneme2 ',
                isCompleted: true
            },
            {
                title: 'Deneme2 ',
                isCompleted: true
            },
        ]
    }

    return (
        <div>
            <h1>
                My Tasks
            </h1>
            <TodoGroup todos={todos} />
        </div>
    )
}
export default Todos