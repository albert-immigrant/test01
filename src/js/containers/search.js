import { connect } from 'react-redux'
import { changeSearch, searchUsers, getUsers } from '../actions'
import SearchTemplate from '../components/Search.jsx'


let timeout = 0;

const mapStateToProps = (state) => {
    return {
        inputText: state.stateStore.searchText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickClear: (router) => {
            dispatch(changeSearch(''));
            dispatch(getUsers(1));
            router.push(`/`);
        },
        onChangeSearch: (e, router) => {
            const value = e.target.value;
            dispatch(changeSearch(value));
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (value == '') {
                    dispatch(getUsers(1));
                    router.push(`/`);
                } else {
                    dispatch(searchUsers(value, dispatch));
                    router.push(`/search/${value}`);
                }
            }, 600);
        },
    }
};

const SearchComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchTemplate);

export default SearchComponent