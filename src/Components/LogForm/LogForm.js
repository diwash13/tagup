import React, { Component } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./logform.module.css";

class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      message: ""
    };
  }

  addLog = e => {
    e.preventDefault();
    const { title, message } = this.state;
    if (title && message) {
      this.props.addLog({
        ...this.state,
        timestamp: new Date().toLocaleString()
      });
      this.clearState();
    } else {
      alert("Oops! Input fields can not be left empty!!");
    }
  };

  clearState = () => {
    this.setState({
      title: "",
      message: ""
    });
  };

  handleChangeTitle = val => {
    this.setState({
      title: val
    });
  };

  handleChangeMessage = val => {
    this.setState({
      message: val
    });
  };

  render() {
    return (
      <Card>
        <h2>Add New Log</h2>
        <form onSubmit={this.addLog}>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Log Title"
            onChange={e => this.handleChangeTitle(e.target.value)}
            value={this.state.title}
          />
          <textarea
            className={styles.messageInput}
            name="Log Message"
            placeholder="Log Message"
            cols="30"
            rows="10"
            onChange={e => this.handleChangeMessage(e.target.value)}
            value={this.state.message}
          />
          <Button
            type="submit"
            label="Submit"
            variant="raised"
            iconClassName="far fa-comment-alt"
          />
        </form>
      </Card>
    );
  }
}

export default LogForm;
