//import user from './user';

let timers = {}
const ajax = function _ajax(method, url, params, scb, ecb) {
  const xhr = new XMLHttpRequest();
  if (method === 'GET') {
    if (url.indexOf('?') < 0) {
      url += '?';
    } else {
      url += '&';
    }
    for (const key in params) {
      url = `${url + key}=${params[key]}&`;
    }
  }

  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.setRequestHeader('Authorization', user.get_token());

  xhr.onreadystatechange = function (oEvent) {
    if (xhr.status === 0) {
      ecb &&
      ecb(xhr.status, 'Server is not responding. Please try again later');
    }
  };

  xhr.addEventListener(
    'load',
    () => {
      if (xhr.readyState !== 4 || xhr.status !== 200) {
        try {
          var text = JSON.parse(xhr.responseText);
        } catch (e) {
          text = xhr.responseText;
        }
        ecb && ecb(text, xhr.status);
      } else {
        let text;
        try {
          text = JSON.parse(xhr.responseText);
        } catch (e) {
          text = xhr.responseText;
        }
        scb && scb(text);
      }
    },
    false,
  );

  const str = JSON.stringify(params);
  xhr.send(str);
};

const http = {

  request: (method, url, query, params) => {
    params = params || {};
    // if (params.progress) {
    //   NProgress.set(.4);
    //   NProgress.start();
    // }


    return new Promise((resolve, reject) => {
      if(url.indexOf("googleapis.com") > 0){
        ajax(
          method,
          `${url}`,
          query,
          res => {
            // if (params.progress) {
            //   NProgress.done();
            // }
            resolve(res);
          },
          (e, code) => {
            // if (params.progress) {
            //   NProgress.done();
            // }
            // if (code === 401) {
            //   return user.logout();
            // }

            reject(e);
          },
        );
      }else{
        ajax(
          method,
          `${http.domain}${url}`,
          query,
          res => {
            // if (params.progress) {
            //   NProgress.done();
            // }
            resolve(res);
          },
          (e, code) => {
            // if (params.progress) {
            //   NProgress.done();
            // }
            // if (code === 401) {
            //   return user.logout();
            // }

            reject(e);
          },
        );
      }

    });
  },
  timer_fn: (timeout, method, url, query, params, name) => {
    return new Promise((resolve, reject) => {
      name = name || 'default_timer';
      clearTimeout(timers[name]);
      timers[name] = setTimeout(() => {
        http[method.toLowerCase()](url, query, params)
          .then(r => {
            resolve(r)
          })
          .catch(e => {
            reject(e)
          })
      }, timeout)
    })
  },
  timer: {
    get: (timer, url, query, params, name)  => http.timer_fn(timer, 'GET', url, query, params, name),
    post: (timer, url, query, params, name) => http.timer_fn(timer, 'POST', url, query, params, name),
    put: (timer, url, query, params, name)  => http.timer_fn(timer, 'PUT', url, query, params, name),
    delete: (timer, url, query, params, name)  => http.timer_fn(timer, 'DELETE', url, query, params, name),
  },
  get: (url, query, params) => http.request('GET', url, query, params),
  post: (url, query, params) => http.request('POST', url, query, params),
  put: (url, query, params) => http.request('PUT', url, query, params),
  delete: (url, query, params) => http.request('DELETE', url, query, params),
};
// eslint-disable-next-line
http.domain = "http://staging.salony.com/v5";

export default http;
