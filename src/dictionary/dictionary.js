const dictionary = {
  login: 'Username',
  password: 'Password',
  signIn: 'Login',
  title: 'WS Time',
  required: 'Required',
  connected: 'Connected',
  disconnected: 'Disconnected',
  logout: 'Logout',
  gitTitle: '@fmva',
};

export const getDictionaryValue = (value) => (dictionary[value] !== undefined ? dictionary[value] : `$${value}$`);
