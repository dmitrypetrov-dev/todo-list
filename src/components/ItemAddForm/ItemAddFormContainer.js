import React, {Component} from 'react';
import {connect} from "react-redux";
import ItemAddForm from "./ItemAddForm";
import {addItem, changeInputText} from "../../store/actions";


class ItemAddFormContainer extends Component {
    render() {
        return (
            <ItemAddForm inputText={this.props.inputText} changeInputText={this.props.changeInputText} addItem={this.props.addItem}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputText: state.inputText
    }
};

const mapDispatchToProps = {
        changeInputText,
        addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddFormContainer);