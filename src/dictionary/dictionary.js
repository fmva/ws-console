const dictionary = {
  login: 'Пользователь',
  password: 'Пароль',
  signIn: 'Войти',
  title: 'WS Time',
  required: 'Обязательное поле',
};

export const getDictionaryValue = (value) => (dictionary[value] !== undefined ? dictionary[value] : `$${value}$`);
