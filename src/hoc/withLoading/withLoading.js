import React, { Component } from "react";

const withLoader = WrappedComponent => {
  // eslint-disable-next-line react/prefer-stateless-function
  return class extends Component {
    render() {
      const { isLoading } = this.props;

      if (isLoading) {
        return <div>Loading ...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoader;
