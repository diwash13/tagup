import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = props => (
  <button
    type={props.type}
    onClick={props.onClick}
    className={`${props.className} ${styles.button}`}
  >
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
