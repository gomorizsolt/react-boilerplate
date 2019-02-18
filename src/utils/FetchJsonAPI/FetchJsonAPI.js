export const fetchJsonAPI = async () => {
  const fetchedTodos = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  return fetchedTodos
    .json()
    .then(responseData => responseData);
};
