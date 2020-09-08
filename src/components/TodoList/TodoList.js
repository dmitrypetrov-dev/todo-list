import React from 'react';
import './TodoList.css'
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = (props) => {
    const elements = props.items.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem label={item.label}
                              id={item.id}
                              deleteItem={props.deleteItem}
                              onToggleDone={props.onToggleDone}
                              isDone={item.done}
                              onImportant={props.onImportant}
                              isImportant={item.important}
                />
            </li>
        );
    });

    return (<ul className="todo-list list-group">{ elements }</ul>);
};


export default TodoList;