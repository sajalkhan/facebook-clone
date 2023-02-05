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
  const isWideScreen = useMediaQuery({
    query: '(min-width: 539px)'
  });

  const isVeryWideScreen = useMediaQuery({
    query: '(min-width: 1170px)'
  });

  const isFirstName = isVeryWideScreen && field.name === 'first_name';
  const isLastName = isVeryWideScreen && field.name === 'last_name';

  return (
    <div className="input_wrap register_input_wrap">
      <input
        className={meta.touched && meta.error ? 'input_error_border' : ''}
        style={{
          width: `${
            isWideScreen && (field.name === 'first_name' || field.name === 'last_name')
              ? '100%'
              : isWideScreen && (field.name === 'email' || field.name === 'password')
              ? '370px'
              : '300px'
          }`
        }}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div
          className={isVeryWideScreen ? 'input_error input_error_desktop' : 'input_error'}
          style={{ transform: 'translateY(2px)', left: `${isFirstName ? '-107%' : isLastName ? '107%' : ''}` }}
        >
          <ErrorMessage name={field.name} />
          <div
            className={
              isVeryWideScreen && field.name !== 'last_name'
                ? 'error_arrow_left'
                : isVeryWideScreen && field.name === 'last_name'
                ? 'error_arrow_right'
                : !isVeryWideScreen
                ? 'error_arrow_bottom'
                : ''
            }
          ></div>
        </div>
      )}

      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  );
};

export default RegisterInput;
