const dictionary = {
  login: 'Пользователь',
  password: 'Пароль',
  signIn: 'Войти',
  title: 'WS Time',
  required: 'Обязательное поле',
  connected: 'Connected',
  disconnected: 'Disconnected',
  logout: 'logout',
};

export const getDictionaryValue = (value) => (dictionary[value] !== undefined ? dictionary[value] : `$${value}$`);
