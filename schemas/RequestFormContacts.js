import * as yup from 'yup';

const RequestFormContacts = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  comment: yup.string().required('company is required'),
  accept_policy: yup.boolean().required('accept policy')
  /*   requests: yup.string().required('requests is required'), */
});

export default RequestFormContacts;
