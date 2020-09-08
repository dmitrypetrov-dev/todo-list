import React from 'react';
import './AppHeader.css'

const AppHeader = (props) => {
    return (
        <div className="app-header d-flex">
            <h1>Список дел</h1>
            <h2>{props.items.filter((el) => el.done).length + ' выполнено, ' + (props.items.length - props.items.filter((el) => el.done).length) + ' не выполнено'}</h2>
        </div>
    )
};

export default AppHeader;