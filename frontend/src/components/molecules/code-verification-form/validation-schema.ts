import * as Yup from 'yup';

export const codeValidation = Yup.object({
  code: Yup.string().required('Code is required')
});
