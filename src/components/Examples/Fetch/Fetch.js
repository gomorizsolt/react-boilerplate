import React, { useState, useEffect } from 'react';
import FetchJsonAPI from '../../../utils/FetchJsonAPI/FetchJsonAPI';

const fetch = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchedTodos = FetchJsonAPI();
    setTodos(fetchedTodos);
  }, todos);

  return (
    <p>You have just fetched a bunch of TODOS!</p>
  );
};

export default fetch;
