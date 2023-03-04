import * as Yup from 'yup';

export const searchAccountValidation = Yup.object({
  email: Yup.string()
    .required('Email address ir required.')
    .email('Must be a valid email address.')
    .max(50, "Email address can't be more than 50 characters.")
});
