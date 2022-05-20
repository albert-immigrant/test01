import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import PageList from './containers/PageList'
import PageDetail from './containers/PageDetail'
import Wellcome001 from './containers/Wellcome001'
import Wellcome from "./components/Wellcome.jsx";
import App from './components/App.jsx'


const RouterHandler = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={PageList} title="Customers List" />
            <Route path="search/:search" component={PageList} title="Customers List" />
            <Route path="detail/:id" component={PageDetail} title="Customer Detail"/>
            <Route path="WellcomeC" component={Wellcome001} title="my Wellcome Container"/>
            <Route path="Wellcome001" component={Wellcome} title="my Wellcome 001"/>
        </Route>
    </Router>
);

export default RouterHandler;