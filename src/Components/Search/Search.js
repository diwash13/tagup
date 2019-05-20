import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          placeholder="Search Logs"
          type="text"
          onChange={this.props.onChange}
        />
        <i className="fas fa-search" style={{ marginLeft: "-20px" }} />
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;
