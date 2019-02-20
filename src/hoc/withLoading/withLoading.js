import React from "react";

const withLoader = WrappedComponent => {
  return class extends WrappedComponent {
    render() {
      const { isLoading } = this.props;
      if (isLoading) {
        return <div>Loading ... </div>;
      }

      return super.render();
    }
  };
};

export default withLoader;
