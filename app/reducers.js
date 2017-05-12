/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

//BookList reduser
//Initial bookList state
const bookListInitialState = fromJS({
  books: null,
});
//Merge books into the global application state
function bookListReducer(state = bookListInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        books: action.books,
      })
    default:
      return state
  }
}
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
      case 'GET_BOOKS_SUCCESS':
        return state.merge({
          books: action.payload,
        });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    books:  bookListReducer,
    ...asyncReducers,
  });
}
