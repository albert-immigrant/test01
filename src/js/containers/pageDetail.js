import React from 'react'
import { connect } from 'react-redux'
import PageDetail from '../components/PageDetail.jsx'
import {getUserDetail} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userDetailStore,
        userId: ownProps.params.id,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (id) => {
            dispatch(getUserDetail(id));
        },
    }
};

const PageDetailComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageDetail);

export default PageDetailComponent