import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/main.css';
import allReducers from './components/reducers'
import HomePage from './components/HomePage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

let myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let home = '/' || '?' || '/?'

ReactDOM.render(
        <Provider store = {myStore}>
            <BrowserRouter>
                <Route path={ home } exact component={ HomePage }/>
                <Switch>
                    {
                        /*
                        <Route path='/AdminPortal' exact component={ AdminPortal }/>
                        <Route component={ FourOFour }/>

                        */
                    }
                </Switch>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));