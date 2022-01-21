const axios = require('axios');

const url = 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-rfp';

const myURL = 'http://52.53.167.218';

const token = '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';

const api = {
  getAllMessages: () => {
    return axios.get(url, {
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