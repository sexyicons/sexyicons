import axios from 'axios';

// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    import.meta.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
  // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

const didAbort = (error) => axios.isCancel(error);

const withAbort =
  (fn) =>
  async (...args) => {
    const originalConfig = args[args.length - 1];
    // Extract abort property from the config
    let { abort, ...config } = originalConfig;

    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === 'function') {
      const controller = new AbortController();
      config.signal = controller.signal;
      abort(() => controller.abort());
    }

    try {
      // Pass all arguments from args besides the config
      return await fn(...args.slice(0, args.length - 1), config);
    } catch (error) {
      // Add "aborted" property to the error if the request was cancelled
      didAbort(error) && (error.aborted = true);
      throw error;
    }
  };

// Main api function
const api = (axios) => {
  return {
    get: (url, config = {}) => withAbort(axios.get)(url, config),
    post: (url, body, config = {}) => withAbort(axios.post)(url, body, config),
    patch: (url, body, config = {}) =>
      withAbort(axios.patch)(url, body, config),
    delete: (url, config = {}) => withAbort(axios.delete)(url, config),
  };
};

export default api(axiosInstance);
