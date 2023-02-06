import React from 'react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import RegisterInput from 'components/atoms/register-input';
import DateOfBirthSelect from 'components/atoms/select-birth-date';
import GenderSelect from 'components/atoms/select-gender';
import DotLoader from 'react-spinners/DotLoader';
import { registerValidation } from './form-validation';
import { Button } from 'components/atoms/button';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

type RegisterFormType = {
  handleRegister: () => void;
};

const RegisterForm: React.FC<RegisterFormType> = ({ handleRegister }) => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const userInfos = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: ''
  };

  const [user, setUser] = useState(userInfos);
  const { first_name, last_name, email, password, bYear, bMonth, bDay, gender } = user;

  const yearTemp = new Date().getFullYear();
  const years = Array.from(new Array(108), (_val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (_val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (_val, index) => 1 + index);

  const [dateError, setDateError] = useState('');
  const [genderError, setGenderError] = useState('');

  const [error] = useState('');
  const [success] = useState('');
  const [loading] = useState(false);

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log('user -- ', user);
  };

  const registerSubmit = async () => {
    // try {
    //   const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
    //     first_name,
    //     last_name,
    //     email,
    //     password,
    //     bYear,
    //     bMonth,
    //     bDay,
    //     gender
    //   });
    //   setError('');
    //   setSuccess(data.message);
    //   const { message, ...rest } = data;
    //   setTimeout(() => {
    //     dispatch({ type: 'LOGIN', payload: rest });
    //     Cookies.set('user', JSON.stringify(rest));
    //     navigate('/');
    //   }, 2000);
    // } catch (error) {
    //   setLoading(false);
    //   setSuccess('');
    //   setError(error.response.data.message);
    // }
  };

  return (
    <div className="m-register-form">
      <div className="m-register-form__container">
        <div className="m-register-form__container--header">
          <i className="exit_icon" onClick={handleRegister}></i>
          <span>Sign Up</span>
          <span>it's quick and easy</span>
        </div>

        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            const current_date = new Date();
            const picked_date = new Date(bYear, bMonth - 1, bDay);
            const atLest_14 = new Date(1970 + 14, 0, 1);
            const noMoreThan70 = new Date(1970 + 70, 0, 1);
            if (current_date.getTime() - picked_date.getTime() < atLest_14.getTime()) {
              setDateError(
                'it looks like you(ve entered the wrong info.Please make sure that you use your real date of birth.'
              );
            } else if (current_date.getTime() - picked_date.getTime() > noMoreThan70.getTime()) {
              setDateError(
                'it looks like you(ve entered the wrong info.Please make sure that you use your real date of birth.'
              );
            } else if (gender === '') {
              setDateError('');
              setGenderError('Please choose a gender. You can change who can see this later.');
            } else {
              setDateError('');
              setGenderError('');
              registerSubmit();
            }
          }}
        >
          {() => (
            <Form className="m-register-form__input">
              <div className="m-register-form__input-row">
                <RegisterInput
                  type="text"
                  placeholder="First name"
                  value={first_name}
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Surname"
                  value={last_name}
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="m-register-form__input-row">
                <RegisterInput
                  type="text"
                  placeholder="Mobile number or email address"
                  name="email"
                  value={email}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="m-register-form__input-row">
                <RegisterInput
                  type="password"
                  placeholder="New password"
                  name="password"
                  password={password}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="m-register-form__input-col">
                <div className="m-register-form__input-col--header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <DateOfBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className="m-register-form__input-col">
                <div className="m-register-form__input-col--header">
                  Gender <i className="info_icon"></i>
                </div>

                <GenderSelect handleRegisterChange={handleRegisterChange} genderError={genderError} />
              </div>
              <div className="m-register-form__infos">
                By clicking Sign Up, you agree to our <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS notifications from us and can opt out at any time.
              </div>
              <div className="m-register-form__button-wrapper">
                <Button type="submit" modifiers="secondary">
                  Sing Up
                </Button>
              </div>
              <DotLoader color="#1876f2" loading={loading} size={30} />
              {error && <div className="error_text">{error}</div>}
              {success && <div className="success_text">{success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
