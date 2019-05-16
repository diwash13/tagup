import React from "react";
import Log from "../Log/Log";
import PropTypes from "prop-types";

const Logs = props =>
  props.logs.map((log, index) => (
    <Log key={log.id} log={log} deleteLog={() => props.deleteLog(index)} />
  ));

Logs.propTypes = {
  deleteLog: PropTypes.func.isRequired,
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  )
};

export default Logs;
