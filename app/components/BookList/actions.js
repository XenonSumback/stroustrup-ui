import * from './constants'

export function pendingBooks () {

  return {
    type: BOOKS_PENDING,
    payload: []
  }
dispatch(action)
}

export function recieveBooks (json) {

  return {
    type: GET_BOOKS_SUCCESS,
    json
  }
dispatch(action)
}
