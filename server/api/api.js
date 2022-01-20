const axios = require('axios');

const url = 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-rfp';

const token = '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';

const api = {
  getAllMessages: () => {
    return axios.get(url, {
      headers: {
        Authorization: token
      }
    });
  }
}

module.exports = api;