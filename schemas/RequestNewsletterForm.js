import * as yup from 'yup';

const RequestNewsletterFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export default RequestNewsletterFormSchema;
