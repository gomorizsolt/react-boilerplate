import React, { useState, useLayoutEffect } from "react";
import * as fetcher from "../../../utils/FetchData/FetchData";

const fetch = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const fetchedTodos = await fetcher.fetchData("https://jsonplaceholder.typicode.com/todos/1");

    setTodos(fetchedTodos);
  };

  useLayoutEffect(() => {
    fetchTodos();
  }, [todos]);

  return (
    <div>
      <p>You have just fetched a TODO!</p>
      <p>{JSON.stringify(todos)}</p>
    </div>
  );
};

export default fetch;
