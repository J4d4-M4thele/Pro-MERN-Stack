import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import IssueList from "./IssueList";

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));

//accepts all changes unconditionally
if(module.hot) {
    module.hot.accept();
}