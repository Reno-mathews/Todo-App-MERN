import { useState } from "react";

function ToDoForm({ addTodo }) {
    const [title, setTtitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        addTodo(title);
        setTtitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={title}
                onChange={(e) => setTtitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ToDoForm;