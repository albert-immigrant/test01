import React from 'react'
import Header from './Header.jsx'


const App = ({ children, routes }) => {
    return (
        <div>
            <Header title={routes[1].title ? routes[1].title : "Welcome"} />
            <div className="center-align">
                {children}
            </div>
        </div>
    )
};

App.propTypes = {
    // title: React.PropTypes.string.isRequired,
    // content: React.PropTypes.any.isRequired,
    // windowEvents: React.PropTypes.func.isRequired,
};

export default App