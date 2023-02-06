import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { useMediaQuery } from 'react-responsive';

type RegisterInputProps = {
  placeholder: string;
  bottom?: boolean;
  type: string;
} & any;

const RegisterInput: React.FC<RegisterInputProps> = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props);

  const isWideScreen = useMediaQuery({ query: '(min-width: 539px)' });
  const isVeryWideScreen = useMediaQuery({ query: '(min-width: 1170px)' });

  const isFirstName = isVeryWideScreen && field.name === 'first_name';
  const isLastName = isVeryWideScreen && field.name === 'last_name';
  const inputWidth = isWideScreen
    ? field.name === 'first_name' || field.name === 'last_name'
      ? '100%'
      : field.name === 'email' || field.name === 'password'
      ? '370px'
      : '300px'
    : '';

  const errorArrowClass = isVeryWideScreen
    ? field.name === 'last_name'
      ? 'error_arrow_right'
      : 'error_arrow_left'
    : 'error_arrow_bottom';

  const errorLeft = isFirstName ? '-107%' : isLastName ? '107%' : '';
  const errorClass = isVeryWideScreen ? 'input_error input_error_desktop' : 'input_error';
  const errorStyle = {
    transform: 'translateY(2px)',
    left: errorLeft
  };

  return (
    <div className="a-register-input">
      <input
        type={type}
        placeholder={placeholder}
        className={meta.touched && meta.error ? 'a-register-input--error-border' : ''}
        style={{ width: inputWidth }}
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <div className={errorClass} style={errorStyle}>
          <ErrorMessage name={field.name} />
          <div className={errorArrowClass}></div>
        </div>
      )}
      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  );
};

export default RegisterInput;
