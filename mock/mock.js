import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, {delayResponse: 1000});

mock.onGet('/api').reply(200, {
  message: "success bobs"
});

export default mock;