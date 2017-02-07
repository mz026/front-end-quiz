
import { LIST } from './mockData'

export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'
export function getList() {
  return {
    type: GET_LIST_SUCCESS,
    response: LIST
  }
}
