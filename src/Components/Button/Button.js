import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button type={props.type} onClick={props.onClick} className={props.className}>
    {props.label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"])
};

export default Button;
