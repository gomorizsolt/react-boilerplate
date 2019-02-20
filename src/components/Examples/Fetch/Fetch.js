import React, { Component } from "react";
import withRouter from "../../../hoc/withLoading/withLoading";
import * as fetcher from "../../../utils/FetchData/FetchData";

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.isLoading = true;
  }

  async componentDidMount() {
    const fetchedTodos = await fetcher.fetchData("https://jsonplaceholder.typicode.com/todos/1");

    this.isLoading = false;

    this.setState({
      todos: fetchedTodos,
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <p>You have just fetched a TODO!</p>
        <p>{JSON.stringify(todos)}</p>
      </div>
    );
  }
}

export default withRouter(Fetch);
