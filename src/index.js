import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';


const alertDefault = true

function reducer2(state = alertDefault, action) {
  if (action.type === 'alertClose') {
    return state = false
  } else {
    return true
  }
}

const defaultValue = [
  {id: 0, name : "멋진신발" ,qty : 2},
  {id: 1, name : "멋진자켓" ,qty : 6}
]

function reducer (state = defaultValue, action ) {

  if ( action.type === '수량증가' ){

    const copy = [...state]
    copy[0].qty++
    return  copy

  } else if (action.type === '수량감소'){
    const copy = [...state]
    if (copy[0].qty > 0) {
      copy[0].qty-- 
    } else {
      copy[0].qty = 0
    }
    return copy

  } else {
    return state
  }


}

const store = createStore(combineReducers({reducer, reducer2}))



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
