import { useState } from "react";

function ToDoForm({ addTodo }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        addTodo(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ToDoForm;

function ToDoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo._id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;

import { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
    const[todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await fetch("http://localhost:5000/api/todos")
        const data = await res.json();
        setTodos(data);
    };

    const addTodo = async (title) => {
        const res = await fetch("http://localhost:5000/api/todos", {
            method: "POST"
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });

        const newTodo = await res.json();
        setTodos([...todos, newTodo]);
    };

    return (
        <div  style={{ padding: "20px" }}>
            <h1>My To-Do App</h1>
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} />
        </div>
    );
}

export default App;
