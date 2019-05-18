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
          <h4>Are You Sure You Want to Delete the Log?</h4>
          <div className={styles.buttonContainer}>{this.props.children}</div>
          <Button label="Yes, I am Positive" onClick={this.props.onOk} />
          <Button label="No, Go Back" onClick={this.props.onCancel} />
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
