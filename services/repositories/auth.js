import fetchClient from '../client/fetchClient';

const resource = '/auth/re-captcha';
export default {
  async reCaptcha(payload) {
    const response = await fetchClient({
      body: payload,
      method: 'POST',
      resource,
    });
    return response;
  },
};