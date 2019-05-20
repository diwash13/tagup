import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";
const cn = require("classnames");

const Button = props => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={cn(props.className, styles.button, {
        [styles.raisedButton]: props.variant === "raised",
        [styles.flatButton]: props.variant === "flat"
      })}
    >
      {props.iconClassName && (
        <i className={`${styles.iconStyle} ${props.iconClassName}`} />
      )}
      {props.label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
  variant: PropTypes.oneOf(["raised", "flat"]).isRequired,
  iconClassName: PropTypes.string
};

export default Button;
