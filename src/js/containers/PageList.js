import React from 'react'
import { connect } from 'react-redux'
import PageList from '../components/PageList.jsx'
import {getUsers, setListPage, changeSearch, searchUsers} from '../actions'


const mapStateToProps = (state) => {
    return {
        count: state.usersStore.count,
        visible: state.usersStore.visible,
        page: state.stateStore.listPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (search) => {
            if (search === null) {
                dispatch(getUsers(1));
            } else {
                dispatch(changeSearch(search));
                dispatch(searchUsers(search, dispatch));
            }
        },
        loadMore: (page) => {
            dispatch(setListPage(page));
            dispatch(getUsers(page));
        }
    }
};

const PageListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageList);

export default PageListComponent