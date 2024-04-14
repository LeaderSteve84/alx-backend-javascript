function handleResponseFromAPI(promise) {
  // append handler using the then method
  return promise
    .then(() => {
      console.log('Got a response from the API'); // log message for resolution
      return { status: 200, body: 'success' }; // return object for resolution
    }).catch(() => {
      console.log('Got a response from the API'); // log message for rejection
      return (new Error()); // return empty object for rejection
    });
}

export default handleResponseFromAPI;
