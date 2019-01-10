import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input type="text" value={props.task} onChange={props.handleChange} />
            <button onClick={props.handleAddTask}>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm