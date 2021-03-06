import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';

//reducer 만드는 세트 
const alertDefault = true //default 값을 하나 만듬 

function reducer2(state = alertDefault, action) { //reducer를 만든다 
  if (action.type === 'alertClose') { //액션 조건문을 만듬
    return state = false
  } else {
    return true
  }
}
//여기까지 

const defaultValue = [
  {id: 0, name : "멋진신발" ,qty : 2},
  {id: 1, name : "멋진자켓" ,qty : 6}
]

function reducer (state = defaultValue, action ) {
  if (action.type === '항목추가') {
    let found = state.findIndex((a)=> {return a.id === action.데이터.id })

    if ( found >= 0 ) {
      let copy = [...state]
      copy[found].qty++
      return copy
    
    } else {
      const copy = [...state]
      copy.push(action.데이터)
      return copy
    }


  } else if ( action.type === '수량증가' ){
    // action.payload 로 값을 받을 수 있음 

    const copy = [...state]
    copy[action.payload].qty++
    return  copy

  } else if (action.type === '수량감소'){

    const copy = [...state]
    if (copy[action.payload].qty > 0) {
      copy[action.payload].qty-- 
    } else {
      copy[action.payload].qty = 0
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
