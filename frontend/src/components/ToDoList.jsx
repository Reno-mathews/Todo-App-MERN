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