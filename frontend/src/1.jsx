import { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect (() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await
    }
}