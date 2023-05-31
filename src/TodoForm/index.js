import React from "react";
import { TodoContext } from '../TodoContex'
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue ] = React.useState('');

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea 
                placeholder="Hcer la tarea de POO" 
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                > Cancelar </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                > Agregar </button>
            </div>
        </form>
    )
}

export { TodoForm };