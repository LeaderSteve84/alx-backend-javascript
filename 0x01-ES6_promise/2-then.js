function handleResponseFromAPI(promise) {
  // append handler using the then method
  promise
    .then((result) => ({ status: 200, body: 'success' }))
    .catch((error) => new Error())
    .then((result) => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
