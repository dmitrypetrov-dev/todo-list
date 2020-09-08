import React from 'react';
import './ItemAddForm.css'

const ItemAddForm = (props) => {
    return (
        <form
            className="bottom-panel d-flex"
            onSubmit={(event) => {event.preventDefault();props.addItem(props.inputText)}}
        >
            <input type="text"
                   className="form-control new-todo-label"
                   placeholder="Добавьте действие.."
                   onChange={(event) => {props.changeInputText(event.target.value)}}
                   value={props.inputText}
            />
            <button type="submit"
                    className="btn btn-outline-secondary">Добавить
            </button>
        </form>
    )
};

export default ItemAddForm;