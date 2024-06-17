import { helloWorld } from '../src/index.js'

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('hello world')
  })
})
