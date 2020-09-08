import React, {Component} from 'react';
import './App.css'
import {Provider} from "react-redux";
import store from "../../store/reducers";
import AppHeaderContainer from "../AppHeader/AppHeaderContainer";
import SearchPanelContainer from "../SearchPanel/SearchPanelContainer";
import StatusFilterContainer from "../StatusFilter/StatusFilterContainer";
import TodoListContainer from "../TodoList/TodoListContainer";
import ItemAddFormContainer from "../ItemAddForm/ItemAddFormContainer";


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="todo-app">
                    <AppHeaderContainer/>
                    <div className="search-panel d-flex">
                        <SearchPanelContainer/>
                        <StatusFilterContainer/>
                    </div>
                    <TodoListContainer/>
                    <ItemAddFormContainer/>
                </div>
            </Provider>
        )
    }
}

export default App;