

const headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json"
});

/**
 * encapsulate the get request method
 * @param url
 * @returns {Promise<Response>}
 */
const get = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: headers
  })
    .then(response => {
      handleResponse(url, response)
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url}. Message = ${err}`);
      return Promise.reject({error: {message: 'Request failed due to front request'}});
    })
}

/**
 * encapsulate the post request method
 * @param url
 * @param data
 * @returns {Promise<Response>}
 */
const post  = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: data
  })
    .then(response => {
      handleResponse(url, response)
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url}. Message = ${err}`);
      return Promise.reject({error: {message: 'Request failed due to front request'}});
    })
}

function handleResponse(url, response) {
  if (response.status === 200) {
    return response.json()
  } else {
    console.error(`Request failed. Url = ${url}`);
    return Promise.reject({error: {message: 'Request failed due to server error'}});
  }
}

export {get, post}

