import { CANCEL_RECORD, GET_SHELDUE, REWRITE_RECORD } from "./types"

const initialStatr = {
  list: [], 
  updated: false
}

export const sheldueReducer = (state = initialStatr, action) => {
  switch(action.type) {
    case CANCEL_RECORD: 
      return {
        ...state,
        list: state.list.map((item) => item.id === action.payload ? {...item, status: 'cancel'} : item)
      }
    case REWRITE_RECORD:
      return {
        ...state,
        list: state.list.map((item) => item.id === action.payload ? {...item, status: 'active'} : item)
      }
    case GET_SHELDUE:
      return{
        ...state,
        list: action.payload,
        updated: true
      }
    default: return state
  }
}