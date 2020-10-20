import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReduxThunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const store = createStore(rootReducer, compose(
  applyMiddleware(ReduxThunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* HashROuter for GithubPages */}
      <HashRouter basename='/'> 
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


