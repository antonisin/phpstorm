import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as __ACTIONS from '_PATH_';

class $NAME extends React.Component {
    constructor(props, context) {
        super(props, context);
        // @TODO Extend constructor function;
    }
    
    render() {
        return (
            // @TODO Add render function;
        );
    };
} 

$NAME .propTypes = {
    // @TODO Add types validation;
};

function mapStateProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(__ACTIONS, dispatch)
    };
}

export default connect(mapStateProps, mapDispatchToProps)($NAME);