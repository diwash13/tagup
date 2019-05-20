import React from "react";
import Card from "../Card/Card";
import styles from "./utilityBar.module.css";

const UtilityBar = props => (
  <Card className={styles.utilityBar}>{props.children}</Card>
);

export default UtilityBar;
