import reducer from './reducer'
import { expect } from 'chai'

describe('Reducer', ()=> {
  it('should be a function', ()=> {
    expect(reducer).to.be.an.instanceof(Function)
  })
})
