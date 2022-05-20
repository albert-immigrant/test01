import C from '../constants'

const initState = {
    count: 0,
    visible: 0,
    users: [],
};



const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case C.SET_USERS_LIST: return setUsersList(action.list);
        case C.ADD_TO_USERS_LIST: return addToUsersList(state, action.list);
        case C.EMPTY_USERS_LIST: return emptyUsersList();
        default:
            return state;
    }
};

export default dataReducer


function emptyUsersList() {
    return initState;
}

function setUsersList(list) {
    return {
        count: list.count,
        visible: list.visible,
        users: list.data,
    }
}

function addToUsersList(state, list) {
    return {
        count: list.count,
        visible: list.visible,
        users: [
            ...state.users,
            ...list.data,
        ],
    }
}