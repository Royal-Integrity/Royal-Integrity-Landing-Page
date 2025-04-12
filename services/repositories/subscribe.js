import fetchClient from '../client/fetchClient';

const resource = '/gmail/subscribe';
export default {
  async subscribe(payload) {
    const response = await fetchClient({
      method: 'POST',
      resource: `${resource}?email=${payload}`,
    });
    return response;
  },
};
