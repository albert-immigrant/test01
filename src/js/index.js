import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppStore from './reducers/'
import Router from './router'

render(
    <Provider store={AppStore}>
        <Router />
    </Provider>,
    document.getElementById('reactjs-wrapper')
);