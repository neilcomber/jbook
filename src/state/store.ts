import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));


// some manual testing:


store.dispatch({
  type: ActionType.INSERT_CELL_AFTER, 
  payload: {
    id: null, 
    type: 'code'
  }
})
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER, 
  payload: {
    id: null, 
    type: 'text'
  }
})
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER, 
  payload: {
    id: null, 
    type: 'code'
  }
})
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER, 
  payload: {
    id: null, 
    type: 'text'
  }
})

// console.log(store.getState());


// const id = store.getState().cells.order[1];

// store.dispatch({
//   type: ActionType.UPDATE_CELL, 
//   payload: {
//     id,
//     content: 'down'
//   }
// })

// console.log(store.getState());
