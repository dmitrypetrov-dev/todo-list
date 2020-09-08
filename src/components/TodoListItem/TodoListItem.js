import React from 'react';
import './TodoListItem.css'

const TodoListItem = (props) => {
    return (
        <span className={props.isDone ? 'todo-list-item done' : props.isImportant ? 'todo-list-item important' : 'todo-list-item'}>
            <span className="todo-list-item-label"
                   onClick={() => {props.onToggleDone(props.id)}}>{props.label}</span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    title="Отметить как важное"
                    onClick={() => {props.onImportant(props.id)}}>
            <i className="fa fa-exclamation"></i>
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    title="Удалить"
                    onClick={() => {props.deleteItem(props.id)}}>
            <i className="fa fa-trash-o"></i>
            </button>
        </span>
    )
};

export default TodoListItem;