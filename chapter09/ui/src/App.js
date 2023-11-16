import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import IssueList from "./IssueList";
import Page from './Page';

const element = (
    <Router>
        <Page />
    </Router>
);

ReactDOM.render(element, document.getElementById('contents'));

//accepts all changes unconditionally
if(module.hot) {
    module.hot.accept();
}