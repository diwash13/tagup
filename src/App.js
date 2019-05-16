import React, { Component } from "react";
import LogForm from "./Components/LogForm/LogForm";
import { data } from "./Data";
import Logs from "./Components/Logs/Logs";
import Seacrh from "./Components/Search/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [...data],
      searchText: ""
    };
  }

  addLog = log => {
    const logWithId = { ...log, id: Date.now() };
    this.setState({ logs: [logWithId, ...this.state.logs] });
    //   const newLogArr = this.state.logs.slice().push(log)
    //   this.setState({logs: newLogArr})
  };

  deleteLog = index => {
    const newLogs = this.state.logs.slice();
    newLogs.splice(index, 1);
    this.setState({ logs: newLogs });
  };

  handleSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  filteredLog = () => {
    return this.state.logs.filter(log =>
      log.title.indexOf(this.state.searchText) === -1 ? false : true
    );
  };

  render() {
    return (
      <main className="App">
        <LogForm addLog={this.addLog} />
        <Seacrh onChange={this.handleSearchChange} />
        <Logs logs={this.filteredLog()} deleteLog={this.deleteLog} />
      </main>
    );
  }
}

export default App;
