import fetchClient from '../client/fetchClient';

const resource = '/gmail/contact';
export default {
  async scheduleAppointment(payload) {
    const response = await fetchClient({
      body: payload,
      method: 'POST',
      resource,
    });
    return response;
  },
};
