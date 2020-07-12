import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';
// components
import { InfoCard } from '../../components/InfoCard';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { LoginErrorMessage } from '../../components/LoginErrorMessage';
// routes
import routes from '../../routes';
// dictionary
import { getDictionaryValue } from '../../dictionary';
// store
import { $authError, $auth, $authLoading, signInUserFx, resetAuthError } from '../../store/auth';
// styles
import './SignIn.scss';

const setValue = (e, setCallbackValue) => {
  const { value } = e.currentTarget;
  setCallbackValue(value);
};

const initialErrors = {
  login: '',
  password: '',
};

/**
 * validation auth fields
 * @param {string} login - login.
 * @param {string} password - subLogin.
 * @return {object} errors
 * @return {string} errors.login
 * @return {string} errors.password
 */
const validateFields = (login = '', password = '') => {
  const errors = { ...initialErrors };
  errors.login = login === '' ? getDictionaryValue('required') : '';
  errors.password = password === '' ? getDictionaryValue('required') : '';
  return errors;
};

export const SignIn = () => {
  const auth = useStore($auth);
  const authError = useStore($authError);
  const authLoading = useStore($authLoading);
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ ...initialErrors });

  useEffect(() => {
    if (!auth) return;
    history.push(routes.main);
  }, [auth, history]);

  const onLoginChange = (e) => {
    setValue(e, setLogin);
  };

  const onPasswordChange = (e) => {
    setValue(e, setPassword);
  };

  const onLogIn = (e) => {
    e.preventDefault();
    resetAuthError();
    const innerLogin = login.trim();
    const validatedFields = validateFields(innerLogin, password);
    setErrors(validatedFields);
    if (Object.keys(validatedFields).some((item) => validatedFields[item] !== '')) return;
    signInUserFx({ password, history, login: innerLogin });
  };

  const mainComponent = (
    <div>
      <form className='sign-in__form' onSubmit={onLogIn}>
        <LoginErrorMessage message={authError} />
        <CustomInput
          title={getDictionaryValue('login')}
          value={login}
          onChange={onLoginChange}
          errorMessage={errors.login}
          disabled={authLoading}
        />
        <CustomInput
          title={getDictionaryValue('password')}
          value={password}
          type='password'
          onChange={onPasswordChange}
          errorMessage={errors.password}
          disabled={authLoading}
        />
        <CustomButton title={getDictionaryValue('signIn')} loading={authLoading} />
      </form>
    </div>
  );

  return (
    <main className='sign-in'>
      <InfoCard title={getDictionaryValue('title')} component={mainComponent} />
    </main>
  );
};
