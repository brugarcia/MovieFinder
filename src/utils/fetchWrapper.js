const fetchWrapper = (url) => fetch(url).then((response) => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response.json();
});

export default fetchWrapper;
