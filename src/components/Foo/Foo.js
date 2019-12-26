import React from "react";
import PropTypes from "prop-types";

const foo = ({ name }) => <p>Hello {name}!</p>;

foo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default foo;
