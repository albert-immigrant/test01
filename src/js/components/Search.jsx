import React from 'react'

const Search = ({router, onClickClear, onChangeSearch, inputText}) => (
    <nav className="margin-bottom">
        <div className="nav-wrapper grey lighten-3">
            <form>
                <div className="input-field">
                    <input
                        type="search"
                        placeholder="Search"
                        className="grey-text text-darken-2"
                        onChange={(e) => onChangeSearch(e, router)}
                        value={inputText}
                        autoFocus="autoFocus"
                    />
                    <label htmlFor="search">
                        <i className="material-icons grey-text text-darken-2">search</i>
                    </label>
                    <i className="material-icons" onClick={() => onClickClear(router)}>close</i>
                </div>
            </form>
        </div>
    </nav>
);

export default Search