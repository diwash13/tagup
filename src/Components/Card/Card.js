import React from "react";
import styles from "./card.module.css";
import PropTypes from "prop-types";
import cn from "classnames";

const Card = props => (
  <div className={cn(styles.card, props.className)}>{props.children} </div>
);

Card.propTypes = {
  className: PropTypes.string
};

export default Card;
