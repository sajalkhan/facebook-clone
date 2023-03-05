import * as Yup from 'yup';

export const codeValidation = Yup.object({
  code: Yup.string()
    .required('Code is required')
    .min(5, 'Code must be 5 characters.')
    .max(5, 'Code must be 5 characters.')
});
