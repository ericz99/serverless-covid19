const axios = require('axios').default;

module.exports = async (options) => {
  options.method = options.method || 'GET';

  const headers = {
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
  };

  // # if custom headers
  if (options.headers) {
    for (const key of Object.keys(options.headers)) {
      headers[key] = options.headers[key];
    }
  }

  let settings = {
    ...options,
    url: options.url,
    method: options.method,
    headers,
  };

  // # return response request
  return await axios(settings);
};
