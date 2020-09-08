import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchPanel from "./SearchPanel";
import {onSearch} from "../../store/actions";

class SearchPanelContainer extends Component {
    render() {
        return (
            <SearchPanel onSearch={this.props.onSearch}/>
        )
    }
}

const mapDispatchToProps = {
    onSearch
};

export default connect(null, mapDispatchToProps)(SearchPanelContainer);