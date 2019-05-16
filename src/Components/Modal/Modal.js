import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./modal.module.css";

class Modal extends Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
        Are You Sure 
          <div>{this.props.children}</div>
          <Button className={styles.button} label="Yes, I am sure" onClick={this.props.onOk}/>
          <Button
            className={styles.button}
            label="No, Go Back"
            onClick={this.props.onCancel}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Modal;
