import React from 'react';
import './SearchPanel.css'

const SearchPanel = (props) => {
    return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="введите для поиска"
                   onChange={(event) => {props.onSearch(event.target.value)}}
            />
    )
};

export default SearchPanel;