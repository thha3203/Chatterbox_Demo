const axios = require('axios');
const { uri, token } = require('../../config.js');

const myURL = 'http://52.53.167.218';

const api = {
  getAllMessages: () => {
    return axios.get(uri, {
      headers: {
        Authorization: token
      }
    });
  },

  getMessages: (page, count) => {
    let messagesURL = `${myURL}/messages`;
    return axios.get(messagesURL, {
      params: { page, count }
    });
  },

  getRooms: () => {
    let roomUrl = `${myURL}/rooms`;
    return axios.get(roomUrl);
  }
}

module.exports = api;