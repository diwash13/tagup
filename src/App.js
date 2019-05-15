import React, { Component } from "react";
import LogForm from "./Components/LogForm/LogForm";
import { data } from "./Data";
import Logs from './Components/Logs/Logs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [...data]
    };
  }

  addLog = (log) => {
    const logWithId = {...log, id:this.state.logs.length}
    this.setState({logs:[logWithId, ...this.state.logs]})
  //   const newLogArr = this.state.logs.slice().push(log)
  //   this.setState({logs: newLogArr})
  }

  render() {
    console.log(this.state)
    return (
      <main className="App">
        <LogForm addLog={this.addLog}/>
        <Logs logs={this.state.logs}/>
      </main>
    );
  }
}

export default App;
