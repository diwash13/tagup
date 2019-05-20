import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./sortby.module.css";

class SortBy extends Component {
  render() {
    return (
      <div className={styles.container}>
        <label htmlFor="sortBy">Sort By:</label>
        <select
          className={styles.select}
          onChange={e => this.props.onSort(e.target.value)}
          id="sortBy"
        >
          <option value="dateDesc">Date (Newest)</option>
          <option value="dateAsc">Date (Oldest)</option>
          <option value="titleAZ">Title (A-Z)</option>
          <option value="titleZA">Title (Z-A)</option>
        </select>
      </div>
    );
  }
}

SortBy.propTypes = {
  onSort: PropTypes.func.isRequired
};

export default SortBy;
