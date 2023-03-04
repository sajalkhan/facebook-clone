import * as Yup from 'yup';

export const searchAccountValidation = Yup.object({
  email: Yup.string().required('Email address is required.').email('Must be a valid email.').max(100)
});
