import fetch from 'isomorphic-fetch'
import C from './constants'

export const changeSearch = (text) => {
    return {
        type: C.SEARCH_INPUT_CHANGE,
        text,
    }
};

export const setListPage = (listPage) => {
    return {
        type: C.SET_LIST_PAGE,
        listPage,
    }
};

export const searchUsers = (text) => {
    return dispatch => {
        fetch(`/api/search/${text}`)
            .then(response => response.json())
            .then(json => dispatch(setUsersList(json)))
    }
};

export const getUsers = (page) => {
    return dispatch => {
        if (page === 1) {
            dispatch(emptyUsersList());
        }
        fetch(`/api/newest/${page}`)
            .then(response => response.json())
            .then(json => dispatch(addToUsersList(json)))
    }
};

export const getUserDetail = (id) => {
    return dispatch => {
        fetch(`/api/detail/${id}`)
            .then(response => response.json())
            .then(json => dispatch(setUserDetail(json)))
    }
};

export const   handleWellcomeChange = (e)=>{
    return  {
        type : C.HANDLE_WELLCOME_CHANGE,
            e,
    }
};

export const   handleVisble = ()=>{
    return  {
        type : C.HANDLE_VISBLE,

    }
};
function setUsersList(list) {
    return {
        type: C.SET_USERS_LIST,
        list,
    }
}

function addToUsersList(list) {
    return {
        type: C.ADD_TO_USERS_LIST,
        list,
    }
}

function emptyUsersList() {
    return {
        type: C.EMPTY_USERS_LIST,
    }
}

function setUserDetail(data) {
    return {
        type: C.SET_USER_DETAIL,
        data,
    }
}


