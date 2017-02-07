import * as actionCreator from './action'
import * as actionType from './action'
import { expect } from 'chai'

describe('Action', ()=> {
  describe('#getList', () => {
    it('should be a function', ()=> {
      expect(actionCreator.getList).to.be.an.instanceof(Function)
    })
  })
})
