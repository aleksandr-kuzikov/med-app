import { CANCEL_RECORD, REWRITE_RECORD, GET_SHELDUE } from "./types";

import * as tools from './tools'

export function cancelRecord(record) {
  return {
    type: CANCEL_RECORD,
    payload: record.id
  }
}

export function rewriteRecord(record) {
  //Отправляем запрос на перезапись, в случае успеха восстанавливаем, в случае провала, удаляем из App
  return {
    type: REWRITE_RECORD,
    payload: record.id
  }
}

export function fetchSheldue() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: GET_SHELDUE, 
        payload: tools.json([0,3,6][Math.floor(Math.random() * 3)]).map(item => ({...item, date: new Date(item.date)})).sort(function(a,b){
          return a.date - b.date
        })
      })
    }, 1000)
  }
}