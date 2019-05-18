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
        timestamp: new Date().toISOString()
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
        <h3 className={styles.add}>Add New Log</h3>
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
            className={styles.submit}
            // className="far fa-comment-alt"
            type="submit"
            label={" Submit"}
          />
          <i className="far fa-comment-alt" style={{ marginLeft: "-145px" }} />
        </form>
      </Card>
    );
  }
}

export default LogForm;
