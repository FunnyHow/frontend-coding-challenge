import actions from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    it('should send some data to the api', () => {
      const stubData = { user: {} }
      return actions.sendToApi(null, stubData).then(() => {
        expect(axios.post.mock.calls.length).toBe(1)
        expect(axios.post.mock.calls[0][0]).toBe('http://localhost:3000/users')
        expect(axios.post.mock.calls[0][1]).toBe(stubData)
        expect(axios.post.mock.instances[0].name).toEqual('test')
      })
    })
  })
})
