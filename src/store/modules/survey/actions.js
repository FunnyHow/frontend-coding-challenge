import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context, data) {
    return axios.post(`${API_URL}/users`, data)
  }
}
