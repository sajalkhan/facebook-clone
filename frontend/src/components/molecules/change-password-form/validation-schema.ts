import * as Yup from 'yup';

export const validatePasswordSchema = Yup.object({
  password: Yup.string()
    .required('Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &).')
    .min(6, 'Password must be at least 6 characters.')
    .max(36, "Password can't be more than 36 characters"),

  conf_password: Yup.string()
    .required('Confirm your password.')
    .oneOf([Yup.ref('password')], 'Passwords must match.')
});
