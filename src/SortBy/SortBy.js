import React, { Component } from "react";
import PropTypes from "prop-types";

class SortBy extends Component {
  
  render() {
    return (
      <div>
        <label htmlFor="sortBy">Sort Logs By</label>
        <select onChange={(e) => this.props.onSort(e.target.value)} id="sortBy">
          <option value="dateDesc">Date(Newest First)</option>
          <option value="dateAsc">Date(Oldest First)</option>
          <option value="title">Title</option>
        </select>
      </div>
    );
  }
}

SortBy.propTypes = {
  onSort: PropTypes.func.isRequired
};

export default SortBy;
