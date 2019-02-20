// Change JavaScript fetch to your own preferred one if it's needed.

export const fetchData = async apiURL => {
  const fetchedData = await fetch(apiURL);

  return fetchedData.json().then(responseData => responseData);
};
