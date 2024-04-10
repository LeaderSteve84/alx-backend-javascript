function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'some data from API' });
    }, 1000);
  });
}

export default getResponseFromAPI;
