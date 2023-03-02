import { useState } from "react";

function App() {
    const [toDoTask, setToDoTask] = useState([]);
    const [count, setCount] = useState(toDoTask.length);
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="Type To-Do Task here..."></input>
            <button>Add To-Do Task</button>
            <ul>To-Do Task List
                <li>To-Do Task</li>
                <button>Check Box</button>
                <button>Delete To-Do Task</button>
            </ul>
        </div>
    )
}