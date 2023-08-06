import { useState } from 'react'
import { ITodo } from '../interfaces/Todo'
import TodoGroup from './TodoGroup'
import './Todos.css'
import AddTodo from './AddTodo'

function Todos() {
    const [todos, setTodos] = useState<Array<ITodo>>([
        {
            id: 1,
            title: 'To do',
            isCompleted: false
        },
        {
            id: 2,
            title: 'To do 2',
            isCompleted: false
        },
        {
            id: 3,
            title: 'To do 3',
            isCompleted: false
        },
        {
            id: 4,
            title: 'To do 4',
            isCompleted: false
        },
        {
            id: 5,
            title: 'To do 5 ',
            isCompleted: true
        },
        {
            id: 6,
            title: 'To do 6',
            isCompleted: true
        },
        {
            id: 7,
            title: 'To do 7',
            isCompleted: true
        },
        {
            id: 8,
            title: 'To do 8',
            isCompleted: true
        },
    ])

    const [todo, setTodo] = useState<string>()

    const addTodo = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        if (todo) {
            const newTodo: ITodo = {
                id: todos[todos.length - 1].id + 1,
                title: todo,
                isCompleted: false
            }
            setTodos([...todos, { ...newTodo }])
        }
        setTodo('')
    }

    const removeTodo = (todo: ITodo): void => {
        setTodos(todos.filter(t => t.id !== todo.id))
    }

    const markAsComplete = (todo: ITodo): void => {
        const todoIndex = todos.findIndex(t => t.id === todo.id)
        todos[todoIndex].isCompleted = true
        setTodos([...todos])
    }

    return (
        <div>
            <h1>
                My Tasks
            </h1>
            <AddTodo setTodo={setTodo} addTodo={addTodo} todo={todo} />
            <TodoGroup todos={todos} removeTodo={removeTodo} markAsComplete={markAsComplete} />
        </div>
    )
}
export default Todos