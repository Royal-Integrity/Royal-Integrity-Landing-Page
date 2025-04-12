import * as yup from 'yup';

const RequestAppointmentFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  rol: yup.string().required('rol is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string().required('company is required'),
  requests: yup.string().required('requests is required'),
});

export default RequestAppointmentFormSchema;
