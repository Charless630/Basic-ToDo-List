import { useState, useRef, useEffect } from 'react'
import './CSS/Todo.css'
import { TodoItems } from './TodoItems';

let count = 0;
export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos, {no:count++, text:inputRef.current.value, display:""}]);
        inputRef.current.value = "";
    }

    useEffect(() => {
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <div className='todo'>
            <div className='todo-header'>To-Do List</div>
            <div className='todo-add'>
                <input ref={inputRef} type='text' placeholder='Add a new task' className='todo-input'/>
                <div onClick={add} className='todo-add-button'>Add</div>
            </div>
            <div className="todo-list"></div>
            {todos.map((item, index) => {
                return <TodoItems key={index} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>
    )
}
