import React, {Component} from 'react';
import {connect} from "react-redux";
import TodoList from "./TodoList";
import {deleteItem, onImportant, onToggleDone} from "../../store/actions";


class TodoListContainer extends Component {
    render() {
        return (
            <TodoList items={this.props.items}
                      deleteItem={this.props.deleteItem}
                      onToggleDone={this.props.onToggleDone}
                      onImportant={this.props.onImportant}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
};

const mapDispatchToProps = {
    deleteItem,
    onToggleDone,
    onImportant,
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);