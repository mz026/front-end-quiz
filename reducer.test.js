import reducer, { defaultState } from './reducer'

import * as actionCreators from './action'
import * as ActionType from './action'
import * as mockData from './mockData'

import { expect } from 'chai'

describe('Reducer', ()=> {
  it('should be a function', ()=> {
    expect(reducer).to.be.an.instanceof(Function)
  })
  describe('when GET_LIST_SUCCESS', ()=> {
    it('merges data', ()=> {
      let action = actionCreators.getList()

      let newState = reducer(defaultState, action)

      expect(newState.list).to.deep.equal(action.response)
    })
  })
})
