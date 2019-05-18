import React, { Component } from "react";
import LogForm from "./Components/LogForm/LogForm";
import { data } from "./Data";
import Logs from "./Components/Logs/Logs";
import Seacrh from "./Components/Search/Search";
import UtilityBar from "./Components/UtilityBar/UtilityBar";
import SortBy from "./Components/SortBy/SortBy";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [...data],
      searchText: "",
      sortBy: "dateDesc"
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
    let sortedLogs = [...this.state.logs];
    if (this.state.sortBy === "dateDesc") {
      sortedLogs.sort((a, b) =>
        new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1
      );
    } else if (this.state.sortBy === "dateAsc") {
      sortedLogs.sort((a, b) =>
        new Date(a.timestamp) < new Date(b.timestamp) ? -1 : 1
      );
    } else if (this.state.sortBy === "titleAZ") {
      sortedLogs.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    } else if (this.state.sortBy === "titleZA") {
      sortedLogs.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
    }
    return sortedLogs.filter(log =>
      log.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) ===
      -1
        ? false
        : true
    );
  };

  onSort = type => {
    this.setState({
      sortBy: type
    });
  };

  render() {
    return (
      <main className={styles.app}>
        <LogForm addLog={this.addLog} />
        <UtilityBar>
          <Seacrh onChange={this.handleSearchChange} />
          <SortBy onSort={this.onSort} />
        </UtilityBar>
        <Logs logs={this.filteredLog()} deleteLog={this.deleteLog} />
      </main>
    );
  }
}

export default App;
