import fetchClient from '../client/fetchClient';

const resource = '/contact/send';
export default {
  async contactUs(payload) {
    const response = await fetchClient({
      body: payload,
      method: 'POST',
      resource,
    });
    return response;
  },
};
