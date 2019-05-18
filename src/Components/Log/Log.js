import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./log.module.css";

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleOnOk = () => {
    this.props.deleteLog();
    this.closeModal();
  };

  render() {
    return (
      <Card>
        <div className={styles.logContainer}>
          <div className={styles.log}>
            <div className={styles.title}>{this.props.log.title}</div>
            <div className={styles.message}>{this.props.log.message}</div>
            <div className={styles.timestamp}>{this.props.log.timestamp}</div>
          </div>
          <Button
            className={styles.delete}
            label={"Delete"}
            onClick={this.openModal}
          />
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onOk={this.props.deleteLog}
          onCancel={this.closeModal}
        />
      </Card>
    );
  }
}

Log.propTypes = {
  deleteLog: PropTypes.func.isRequired,
  log: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
};

export default Log;
