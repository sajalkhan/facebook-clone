import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { useMediaQuery } from 'react-responsive';

type LoginInputProps = {
  placeholder: string;
  bottom?: boolean;
  type: string;
} & any;

const LoginInput: React.FC<LoginInputProps> = ({ placeholder, bottom, type, ...props }) => {
  const [field, meta] = useField(props);

  const desktopView = useMediaQuery({
    query: '(min-width: 850px)'
  });

  return (
    <div className="a-login-input">
      {meta.touched && meta.error && !bottom && (
        <div className={desktopView ? 'input_error input_error_desktop' : 'input_error'}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <div className={desktopView ? 'error_arrow_left' : 'error_arrow_top'}></div>}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? 'a-login-input--error-border' : ''}
        placeholder={placeholder}
        type={type}
        {...props}
        {...field}
      />
      {meta.touched && meta.error && bottom && (
        <div className={desktopView ? 'input_error input_error_desktop' : 'input_error'}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={desktopView ? 'error_arrow_left' : 'error_arrow_bottom'}></div>
          )}
        </div>
      )}

      {meta.touched && meta.error && (
        <i className="error_icon" style={{ top: `${!bottom && !desktopView ? '63%' : '15px'}` }}></i>
      )}
    </div>
  );
};

export default LoginInput;
