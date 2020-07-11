const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;

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
      if (err.response.status === BAD_REQUEST_STATUS || err.response.status === UNAUTHORIZED_STATUS) break;
    }
  }
  throw error;
};

export const uniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;
