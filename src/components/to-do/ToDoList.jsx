import { React, useState } from 'react';
import './styles.css';

export default function ToDoList() {
    const [todos, setToDos] = useState([]);
    const [newToDo, setNewToDo] = useState('');

    // Used for editing
    const [editingId, setEditingId] = useState(null);
    const [editingToDo, setEditingToDo] = useState('');

    const addToDo = (event) => {
        // Need prevent default to prevent page reload on submit
        event.preventDefault();

        if (!newToDo) {
            return;
        }
        setToDos([...todos, newToDo]);
        setNewToDo('');

        // Reset form field
        event.target.reset();
    }

    const handleSubmitEdit = (event, itemToEdit) => {
        event.preventDefault();

        const newTodos = todos.map((todo) => {
            if (todo === itemToEdit) {
                return editingToDo;
            } else {
                return todo
            }
        })

        setToDos(newTodos);
        setEditingId(null);
        setEditingToDo('');
    }

    const handleDelete = (itemToDelete) => {
        setToDos(todos.filter(todo => todo !== itemToDelete))
    }

    return (
        <div className='todolist'>
            <form onSubmit={(event) => addToDo(event)}>
                <input type="text" placeholder="Add To-Do" onChange={(e) => setNewToDo(e.target.value)} />
            </form>

            <ul className='todos'>
                {todos.map((todo, index) => {
                    return (
                        <li key={index} className='todo'>
                            {(editingId !== todo) ? (<span> {todo} </span>) : (
                                <form onSubmit={(e) => handleSubmitEdit(e, todo)}>
                                    <input type="text" placeholder={todo} onChange={(e) => setEditingToDo(e.target.value)} />
                                </form>
                            )}

                            <div>
                                {(editingId !== todo) && (
                                    <button onClick={() => setEditingId(todo)}>
                                        Edit
                                    </button>
                                )}
                                <button onClick={() => handleDelete(todo)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}