import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    return (
      <div>
        <input
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
