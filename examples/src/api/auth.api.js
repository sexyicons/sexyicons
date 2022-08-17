/**
 * @example How to use the API layer
 * The methods from the api.js file should not be used directly.
 * Instead, you should create API files for each of your server features.
 * For example, user.api, auth.api, blog.api, newsletter.api, etc.
 * Methods from the *.api.js files should be used across your appplication
 */

import api from './api';

export const login = ({ email, password }, config) => {
  return api.post('loginUrl', { email, password }, config);
};

export const register = ({ email, password }, config) => {
  return api.post('registerUrl', { email, password }, config);
};
