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
    this.props.addLog({
      ...this.state,
      timestamp: new Date().toISOString()
    });
    this.clearState();
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
        <h3>Add New Log</h3>
        <form onSubmit={this.addLog}>
          <input
            className={styles.input}
            type="text"
            placeholder="Log Title"
            onChange={e => this.handleChangeTitle(e.target.value)}
            value={this.state.title}
          />
          <textarea
            className={styles.textarea}
            name="Log Message"
            placeholder="Log Message"
            cols="30"
            rows="10"
            onChange={e => this.handleChangeMessage(e.target.value)}
            value={this.state.message}
          />
          <Button
            className="far fa-comment-alt"
            type="submit"
            label={" Submit"}
          />
        </form>
      </Card>
    );
  }
}

export default LogForm;
