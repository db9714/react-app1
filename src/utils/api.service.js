import axios from 'axios';
import { API_URL } from './../config';

let ApiService = {
  get: (url, payload, headers, showLoader, callback) => {
    showLoader(true);
    axios
      .get(API_URL + url, {
        params: payload,
        headers: {
          Authorization: `Token ${headers.Token}`,
        },
      })
      .then((responseData) => {
        showLoader(false);
        if (responseData) {
          callback && callback(responseData.data, null);
        }
      })
      .catch((error) => {
        showLoader(false);
        console.log(JSON.stringify(error));

        if (error.response) {
          if (error.response.data.detail) {
            alert(error.response.data.detail);
            global.navigate('/');
          }
          callback && callback(null, error.response.data);
        }
      });
  },
  post: (url, data, headers, showLoader, callback) => {
    showLoader(true);
    axios
      .post(API_URL + url, data, { headers: headers })
      .then((responseData) => {
        showLoader(false);
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        showLoader(false);
        console.log(JSON.stringify(error));
        if (error.response) {
          if (error.response.data.detail) {
            alert(error.response.data.detail);
            global.navigate('/');
          }
          callback && callback(null, error.response.data);
        }
      });
  },
  del: (url, payload, headers, showLoader, callback) => {
    showLoader(true);
    axios
      .delete(API_URL + url, {
        params: payload,
        headers: headers,
      })
      .then((responseData) => {
        showLoader(false);
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        showLoader(false);
        console.log(JSON.stringify(error));
        if (error.response) {
          callback && callback(null, error.response.data);
        }
      });
  },
  patch: (url, data, headers, showLoader, callback) => {
    showLoader(true);
    axios
      .patch(API_URL + url, data, { headers: headers })
      .then((responseData) => {
        showLoader(false);
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        showLoader(false);
        console.log(JSON.stringify(error));
        if (error.response) {
          callback && callback(null, error.response.data);
        }
      });
  },
  put: (url, data, headers, showLoader, callback) => {
    showLoader(true);
    axios
      .put(API_URL + url, data, { headers: headers })
      .then((responseData) => {
        showLoader(false);
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        showLoader(false);
        console.log(JSON.stringify(error));
        if (error.response) {
          if (error.response.data.detail) {
            alert(error.response.data.detail);
            global.navigate('/');
          }
          callback && callback(null, error.response.data);
        }
      });
  },
  patchFile: (url, data, headers, showLoader, callback) => {
    showLoader(true);
    axios
      .patch(API_URL + url, data, { headers: headers })
      .then((responseData) => {
        showLoader(false);
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        showLoader(false);
        console.log(JSON.stringify(error));
        if (error.response) {
          if (error.response.data.detail) {
            alert(error.response.data.detail);
            global.navigate('/');
          }
          callback && callback(null, error.response.data);
        }
      });
  },
};

export default ApiService;
