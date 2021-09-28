

function ToDo({ todo, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div className="item-text">
                {todo.task}
                {todo.textarea}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo