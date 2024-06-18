import { helloWorld } from '../src/index'

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('hello world')
  })
})
