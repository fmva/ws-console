const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;
const M_SEC = 1000;

export const isTokenValid = (status) => !(status === BAD_REQUEST_STATUS || status === UNAUTHORIZED_STATUS);

/**
 * @param {function} callback
 * @param {object} body
 * @param {number} count
 */
export const multipleFetchUrl = async (callback, body, count) => {
  let error;
  for (let n = 0; n < count; n++) {
    try {
      return await callback(body);
    } catch (err) {
      error = err;
      if (!isTokenValid(err.response.status)) break;
    }
  }
  throw error;
};

export const uniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;

const addZero = (value) => `0${value}`.slice(-2);

export const getDateAndTime = (time) => {
  if (time === 0) return '';
  const date = new Date(time * M_SEC);

  return `${addZero(date.getDate())}-${addZero(date.getMonth() + 1)}-${date.getFullYear()} ${addZero(
    date.getHours(),
  )}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
};
