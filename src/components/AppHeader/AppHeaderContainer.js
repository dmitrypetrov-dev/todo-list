import React, {Component} from 'react';
import AppHeader from "./AppHeader";
import {connect} from "react-redux";

class AppHeaderContainer extends Component {
    render() {
        return (
            <AppHeader items={this.props.items}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};


export default connect(mapStateToProps)(AppHeaderContainer);