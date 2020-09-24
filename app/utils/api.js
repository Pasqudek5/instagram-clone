const baseApiUrl = (...values) =>
  `https://www.instagram.com/${values.join('/')}/?__a=1`;

const api = values => baseApiUrl(values);

export default api;
