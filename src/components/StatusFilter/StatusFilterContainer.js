import React, {Component} from 'react';
import {connect} from "react-redux";
import StatusFilter from "./StatusFilter";
import {changeFilter} from "../../store/actions";

class StatusFilterContainer extends Component {
    render() {
        return (
            <StatusFilter filter={this.props.filter} changeFilter={this.props.changeFilter}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

const mapDispatchToProps = {
    changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusFilterContainer);