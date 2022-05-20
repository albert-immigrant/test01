import C from '../constants'

const initState = {
    searchText: "",
    listPage: 1,
};

const stateReducer = (state = initState, action) => {
    switch (action.type) {
        case C.SEARCH_INPUT_CHANGE: return setInputText(state, action.text);
        case C.SET_LIST_PAGE: return setListPage(state, action.listPage);
        default: return state;
    }
};

export default stateReducer


function setInputText(state, searchText) {
    console.log(state)
    return Object.assign({}, state, {
        searchText,
    })
}

function setListPage(state, listPage) {
    return Object.assign({}, state, {
        listPage,
    })
}