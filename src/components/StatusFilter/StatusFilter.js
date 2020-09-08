import React from 'react';

const StatusFilter = (props) => {
    return (
        <div className="btn-group">
            <button type="button"
                    id='all'
                    className={props.filter === 'all' ? "btn btn-info" : "btn btn-outline-secondary"}
                    onClick={(event) => {props.changeFilter(event.target.id)}}>Все</button>
            <button type="button"
                    id='active'
                    className={props.filter === 'active' ? "btn btn-info" : "btn btn-outline-secondary"}
                    onClick={(event) => {props.changeFilter(event.target.id)}}>Активные</button>
            <button type="button"
                    id='done'
                    className={props.filter === 'done' ? "btn btn-info" : "btn btn-outline-secondary"}
                    onClick={(event) => {props.changeFilter(event.target.id)}}>Выполнено</button>
        </div>
    )
};

export default StatusFilter;